'use client';

import React, { useState, useCallback, useEffect, useRef } from 'react';
import { FaGithub, FaBars, FaTimes } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';
import { RiWhatsappFill } from 'react-icons/ri';
import { BsMoonFill, BsSunFill } from 'react-icons/bs';
import { useTheme } from '@/ThemeContext';
import { useRouter, usePathname } from 'next/navigation';
import { FormattedMessage } from 'react-intl';
import { useLanguage } from '@/LanguageContext';

const Navbar: React.FC = () => {
    const { isDarkMode, toggleTheme } = useTheme();
    const router = useRouter();
    const pathname = usePathname();
    const { locale, setLocale } = useLanguage();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');
    const [isLangOpen, setIsLangOpen] = useState(false);
    const [isMobileLangOpen, setIsMobileLangOpen] = useState(false);
    const [isThemeRotating, setIsThemeRotating] = useState(false);

    const menuRef = useRef<HTMLDivElement>(null);
    const langRef = useRef<HTMLDivElement>(null);
    const mobileLangRef = useRef<HTMLDivElement>(null);

    // Dynamic class generator for desktop navigation links
    const getLinkClass = (section: string) => {
        const isActive = activeSection === section;
        return `relative font-medium text-sm transition-colors duration-300 py-1.5 px-1 focus:outline-none cursor-pointer
            ${isActive
                ? (isDarkMode ? 'text-blue-400 font-semibold' : 'text-indigo-600 font-semibold')
                : (isDarkMode ? 'text-gray-300 hover:text-blue-400' : 'text-gray-600 hover:text-indigo-600')
            }
            after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] 
            after:bg-indigo-600 dark:after:bg-blue-400 after:origin-bottom-right 
            after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:ease-out
            ${isActive ? 'after:scale-x-100 after:origin-bottom-left' : ''}
        `;
    };

    // Dynamic class generator for mobile menu navigation links
    const getMobileLinkClass = (section: string) => {
        const isActive = activeSection === section;
        return `w-full text-left font-medium text-lg transition-all duration-200 py-2.5 px-4 rounded-lg focus:outline-none cursor-pointer block
            ${isActive
                ? (isDarkMode ? 'bg-slate-700/80 text-blue-400 font-semibold border-l-4 border-blue-400' : 'bg-gray-200 text-indigo-600 font-semibold border-l-4 border-indigo-600')
                : (isDarkMode ? 'text-gray-300 hover:bg-slate-700' : 'text-gray-700 hover:bg-gray-100')
            }
        `;
    };

    const handleLocaleChange = useCallback(
        (newLocale: string) => {
            const cleanPathname = pathname.replace(/^\/(en|es)/, '');
            let newPathname;
            if (newLocale === 'en') {
                newPathname = cleanPathname === '' ? '/' : cleanPathname;
            } else {
                newPathname = `/${newLocale}${cleanPathname}`;
            }
            setLocale(newLocale);
            router.push(newPathname);
            setIsMobileMenuOpen(false);
        },
        [pathname, router, setLocale]
    );

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const handleThemeClick = () => {
        setIsThemeRotating(true);
        toggleTheme();
        setTimeout(() => setIsThemeRotating(false), 500);
    };

    // Scroll spy logic using Intersection Observer
    useEffect(() => {
        const sections = ['home', 'projects', 'contact'];
        const observers = sections.map((id) => {
            const el = document.getElementById(id);
            if (!el) return null;
            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) {
                        setActiveSection(id);
                    }
                },
                {
                    rootMargin: '-30% 0px -50% 0px',
                }
            );
            observer.observe(el);
            return { observer, el };
        });

        return () => {
            observers.forEach((obs) => {
                if (obs) {
                    obs.observer.unobserve(obs.el);
                }
            });
        };
    }, []);

    // Click outside listener to close custom dropdowns
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (langRef.current && !langRef.current.contains(event.target as Node)) {
                setIsLangOpen(false);
            }
            if (mobileLangRef.current && !mobileLangRef.current.contains(event.target as Node)) {
                setIsMobileLangOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    // Lock body scroll when mobile menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [isMobileMenuOpen]);

    return (
        <>
            {/* ── Navbar ── */}
            <header
                className={`py-3 fixed top-0 left-0 w-full z-20 backdrop-blur-md transition-all duration-300 ${
                    isDarkMode
                        ? 'shadow-lg bg-slate-900/80 border-b border-slate-800/40'
                        : 'shadow-md bg-white/75 border-b border-gray-200/40'
                }`}
            >
                <div className="container mx-auto flex justify-between items-center px-6">

                    {/* Brand Logo */}
                    <a
                        href="#home"
                        className="text-xl font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 dark:from-blue-400 dark:via-indigo-400 dark:to-purple-400 bg-clip-text text-transparent hover:scale-105 transition-transform duration-200 cursor-pointer select-none"
                    >
                        jonathan.dev
                    </a>

                    {/* Main Navigation Links (Desktop) */}
                    <nav className="hidden sm:flex items-center space-x-8">
                        <ul className="flex space-x-8">
                            <li>
                                <a href="#home" className={getLinkClass('home')}>
                                    <FormattedMessage id="home" defaultMessage="Home" />
                                </a>
                            </li>
                            <li>
                                <a href="#projects" className={getLinkClass('projects')}>
                                    <FormattedMessage id="projects" defaultMessage="Projects" />
                                </a>
                            </li>
                            <li>
                                <a href="#contact" className={getLinkClass('contact')}>
                                    <FormattedMessage id="contact" defaultMessage="Contact" />
                                </a>
                            </li>
                        </ul>

                        {/* Language Selector (Desktop) */}
                        <div className="relative" ref={langRef}>
                            <button
                                onClick={() => setIsLangOpen(!isLangOpen)}
                                className={`flex items-center space-x-1 border rounded-md py-1.5 px-3 focus:outline-none transition-all duration-200 text-sm font-medium ${
                                    isDarkMode
                                        ? 'bg-slate-800 text-white border-slate-700 hover:bg-slate-700'
                                        : 'bg-white text-gray-800 border-gray-300 hover:bg-gray-50'
                                }`}
                            >
                                <span>{locale === 'en' ? 'EN' : 'ES'}</span>
                                <svg
                                    className={`w-4 h-4 transition-transform duration-200 ${isLangOpen ? 'rotate-180' : ''}`}
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                            {isLangOpen && (
                                <div
                                    className={`absolute right-0 mt-2 w-28 rounded-md shadow-lg border py-1 z-50 transition-all duration-200 ${
                                        isDarkMode ? 'bg-slate-800 border-slate-700 text-white' : 'bg-white border-gray-200 text-gray-800'
                                    }`}
                                >
                                    <button
                                        onClick={() => { handleLocaleChange('en'); setIsLangOpen(false); }}
                                        className={`w-full text-left px-4 py-2 text-sm transition-colors duration-150 ${
                                            locale === 'en'
                                                ? 'bg-indigo-500/10 text-indigo-500 dark:text-blue-400 font-semibold'
                                                : isDarkMode ? 'hover:bg-slate-700' : 'hover:bg-gray-50'
                                        }`}
                                    >
                                        English
                                    </button>
                                    <button
                                        onClick={() => { handleLocaleChange('es'); setIsLangOpen(false); }}
                                        className={`w-full text-left px-4 py-2 text-sm transition-colors duration-150 ${
                                            locale === 'es'
                                                ? 'bg-indigo-500/10 text-indigo-500 dark:text-blue-400 font-semibold'
                                                : isDarkMode ? 'hover:bg-slate-700' : 'hover:bg-gray-50'
                                        }`}
                                    >
                                        Español
                                    </button>
                                </div>
                            )}
                        </div>
                    </nav>

                    {/* Right Side Icons & Actions */}
                    <div className="flex items-center space-x-4">
                        {/* Social networks (Desktop) */}
                        <div className="hidden sm:flex items-center space-x-3.5">
                            <a
                                href="mailto:jhernadezcorrea@gmail.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-blue-400 transition-all duration-200 hover:scale-110 hover:-translate-y-0.5"
                                aria-label="Email"
                            >
                                <AiOutlineMail size={20} />
                            </a>
                            <a
                                href="https://github.com/jonathanDavid1"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-blue-400 transition-all duration-200 hover:scale-110 hover:-translate-y-0.5"
                                aria-label="GitHub"
                            >
                                <FaGithub size={20} />
                            </a>
                            <a
                                href="https://wa.me/+573105787397"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-blue-400 transition-all duration-200 hover:scale-110 hover:-translate-y-0.5"
                                aria-label="WhatsApp"
                            >
                                <RiWhatsappFill size={20} />
                            </a>
                        </div>

                        {/* Separator (Desktop) */}
                        <span className="hidden sm:inline-block h-5 w-px bg-gray-300 dark:bg-slate-700"></span>

                        {/* Theme Toggle */}
                        <button
                            onClick={handleThemeClick}
                            className="text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-blue-400 p-1.5 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-800 transition-all duration-200 focus:outline-none cursor-pointer"
                            aria-label="Theme toggle"
                        >
                            <div className={`transition-transform duration-500 ${isThemeRotating ? 'rotate-[360deg]' : ''}`}>
                                {isDarkMode ? <BsSunFill size={20} /> : <BsMoonFill size={20} />}
                            </div>
                        </button>

                        {/* Mobile Hamburger */}
                        <button
                            onClick={toggleMobileMenu}
                            className="sm:hidden text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-blue-400 p-1.5 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-800 transition-all duration-200 focus:outline-none cursor-pointer"
                            aria-label="Menu"
                        >
                            {isMobileMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
                        </button>
                    </div>
                </div>
            </header>

            {/* ── Mobile Menu — outside <header> to avoid stacking context issues ── */}
            {isMobileMenuOpen && (
                <>
                    {/* Dimmed backdrop — closes menu on click */}
                    <div
                        className="fixed inset-0 bg-black/40 z-30"
                        onClick={toggleMobileMenu}
                    />

                    {/* Slide-in side panel */}
                    <div
                        ref={menuRef}
                        className={`fixed top-0 left-0 h-full w-72 z-40 shadow-2xl flex flex-col
                            ${isDarkMode ? 'bg-slate-900 text-white' : 'bg-white text-gray-800'}`}
                    >
                        <div className="flex flex-col h-full py-6 px-6">

                            {/* Panel header */}
                            <div className={`flex items-center justify-between border-b pb-4 ${isDarkMode ? 'border-slate-800' : 'border-gray-200'}`}>
                                <span className="text-lg font-bold bg-gradient-to-r from-indigo-500 to-pink-500 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
                                    jonathan.dev
                                </span>

                                <div className="flex items-center space-x-3">
                                    {/* Language Selector (Mobile) */}
                                    <div className="relative" ref={mobileLangRef}>
                                        <button
                                            onClick={() => setIsMobileLangOpen(!isMobileLangOpen)}
                                            className={`flex items-center space-x-1 border rounded-md py-1.5 px-3 focus:outline-none transition-all duration-200 text-sm font-medium ${
                                                isDarkMode
                                                    ? 'text-white border-slate-700 hover:bg-slate-800'
                                                    : 'bg-white text-gray-800 border-gray-300 hover:bg-gray-50'
                                            }`}
                                        >
                                            <span>{locale === 'en' ? 'EN' : 'ES'}</span>
                                            <svg
                                                className={`w-4 h-4 transition-transform duration-200 ${isMobileLangOpen ? 'rotate-180' : ''}`}
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                            </svg>
                                        </button>
                                        {isMobileLangOpen && (
                                            <div
                                                className={`absolute right-0 mt-2 w-28 rounded-md shadow-lg border py-1 z-50 ${
                                                    isDarkMode ? 'bg-slate-800 border-slate-700 text-white' : 'bg-white border-gray-200 text-gray-800'
                                                }`}
                                            >
                                                <button
                                                    onClick={() => { handleLocaleChange('en'); setIsMobileLangOpen(false); }}
                                                    className={`w-full text-left px-4 py-2 text-sm transition-colors duration-150 ${
                                                        locale === 'en'
                                                            ? 'bg-indigo-500/10 text-indigo-500 dark:text-blue-400 font-semibold'
                                                            : isDarkMode ? 'hover:bg-slate-700' : 'hover:bg-gray-50'
                                                    }`}
                                                >
                                                    English
                                                </button>
                                                <button
                                                    onClick={() => { handleLocaleChange('es'); setIsMobileLangOpen(false); }}
                                                    className={`w-full text-left px-4 py-2 text-sm transition-colors duration-150 ${
                                                        locale === 'es'
                                                            ? 'bg-indigo-500/10 text-indigo-500 dark:text-blue-400 font-semibold'
                                                            : isDarkMode ? 'hover:bg-slate-700' : 'hover:bg-gray-50'
                                                    }`}
                                                >
                                                    Español
                                                </button>
                                            </div>
                                        )}
                                    </div>

                                    {/* Close button */}
                                    <button
                                        onClick={toggleMobileMenu}
                                        className="text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-blue-400 p-1.5 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-800 transition-all duration-200 focus:outline-none"
                                        aria-label="Cerrar menú"
                                    >
                                        <FaTimes size={20} />
                                    </button>
                                </div>
                            </div>

                            {/* Navigation links */}
                            <nav className="mt-8 flex flex-col space-y-4 flex-grow">
                                <a onClick={() => setIsMobileMenuOpen(false)} href="#home" className={getMobileLinkClass('home')}>
                                    <FormattedMessage id="home" defaultMessage="Home" />
                                </a>
                                <a onClick={() => setIsMobileMenuOpen(false)} href="#projects" className={getMobileLinkClass('projects')}>
                                    <FormattedMessage id="projects" defaultMessage="Projects" />
                                </a>
                                <a onClick={() => setIsMobileMenuOpen(false)} href="#contact" className={getMobileLinkClass('contact')}>
                                    <FormattedMessage id="contact" defaultMessage="Contact" />
                                </a>
                            </nav>

                            {/* Social icons at the bottom */}
                            <div className="flex items-center justify-center space-x-6 pt-6 border-t border-gray-200 dark:border-slate-800">
                                <a
                                    href="mailto:jhernadezcorrea@gmail.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-blue-400 transition-colors duration-200"
                                    aria-label="Email"
                                >
                                    <AiOutlineMail size={24} />
                                </a>
                                <a
                                    href="https://github.com/jonathanDavid1"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-blue-400 transition-colors duration-200"
                                    aria-label="GitHub"
                                >
                                    <FaGithub size={24} />
                                </a>
                                <a
                                    href="https://wa.me/+573105787397"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-blue-400 transition-colors duration-200"
                                    aria-label="WhatsApp"
                                >
                                    <RiWhatsappFill size={24} />
                                </a>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </>
    );
};

export default Navbar;