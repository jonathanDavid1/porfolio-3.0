'use client';

import React, { useState, useCallback } from 'react';
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

    const textStyle = `text-gray-700 hover:text-primary-500 font-medium px-2 py-1 rounded-md border border-gray-300 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500`;
    const buttonStyle = isDarkMode
        ? `${textStyle} text-white bg-gray-800 border-gray-700`
        : `${textStyle} bg-gray-100`;

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
            setIsMobileMenuOpen(false); // Cierra al cambiar idioma
        },
        [pathname, router, setLocale]
    );

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };


    return (
        <header
            className={`py-4 fixed top-0 left-0 w-full z-20 transition-shadow duration-200 ${
                isDarkMode ? 'shadow-md bg-black' : 'shadow-md bg-gray-50'
            }`}
        >
            <div className="container mx-auto flex justify-between items-center px-4">

                {/* Contenedor principal para mobile (ocupa todo el ancho) */}
                <div className="flex items-center justify-between w-full sm:w-auto">
                    {/* Botón hamburguesa (visible solo en mobile) */}
                    <button
                        onClick={toggleMobileMenu}
                        className="sm:hidden text-gray-500 hover:text-primary-500"
                        aria-label="Menú"
                    >
                        {isMobileMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
                    </button>

                    {/* Redes sociales (ajustadas a la derecha en pantallas pequeñas) */}
                    <div className="flex items-center">
                        <a
                            href="mailto:jhernadezcorrea@gmail.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-500 hover:text-primary-500 mr-4"
                            aria-label="Email"
                        >
                            <AiOutlineMail size={20} />
                        </a>
                        <a
                            href="https://github.com/jonathanDavid1"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-500 hover:text-primary-500 mr-4"
                            aria-label="GitHub"
                        >
                            <FaGithub size={20} />
                        </a>
                        <a
                            href="https://wa.me/+573105787397"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-500 hover:text-primary-500"
                            aria-label="WhatsApp"
                        >
                            <RiWhatsappFill size={20} />
                        </a>
                    </div>
                </div>



                {/* Menú principal (visible en >= sm) */}
                <nav className="hidden sm:flex items-center">
                    <ul className="flex space-x-6">
                        <li>
                            <a href="#home" aria-current="page" className={buttonStyle}>
                                <FormattedMessage id="home" defaultMessage="Home" />
                            </a>
                        </li>
                        <li>
                            <a href="#projects" className={buttonStyle}>
                                <FormattedMessage id="projects" defaultMessage="Projects" />
                            </a>
                        </li>
                        <li>
                            <a href="#contact" className={buttonStyle}>
                                <FormattedMessage id="contact" defaultMessage="Contact" />
                            </a>
                        </li>
                    </ul>
                      {/* Selector de idioma y cambio de tema (en el menú principal) */}
                    <div className='flex items-center'>
                        <select
                            onChange={(event) => handleLocaleChange(event.target.value)}
                            value={locale}
                            className={`ml-6 border rounded-md py-1 px-2 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 ${
                                isDarkMode
                                    ? 'bg-gray-800 text-white border-black'
                                    : 'bg-white text-gray-800 border-black'
                            }`}
                        >
                            <option value="en">English</option>
                            <option value="es">Español</option>
                        </select>
                        <button onClick={toggleTheme} className="ml-4 text-gray-500 hover:text-primary-500">
                            {isDarkMode ? <BsSunFill size={20} /> : <BsMoonFill size={20} />}
                        </button>
                    </div>
                </nav>

                {/* Menú móvil (visible en < sm) */}
                {isMobileMenuOpen && (
                    <div
                        className={`fixed top-0 left-0 w-full h-full ${
                            isDarkMode ? 'bg-black' : 'bg-white'
                        } z-50`}
                    >
                        <div className="flex flex-col  h-full py-10 px-4">
                            {/* Parte superior:  botón CERRAR */}
                            <div className="flex items-center justify-between">

                                 {/* Botón CERRAR (visible dentro del menú móvil) */}
                                <button
                                    onClick={toggleMobileMenu}
                                    className="text-gray-500 hover:text-primary-500"
                                    aria-label="Cerrar menú"
                                >
                                    <FaTimes size={20} />
                                </button>
                                 <div className='flex items-center'>
                                    <select
                                        onChange={(event) => handleLocaleChange(event.target.value)}
                                        value={locale}
                                        className={`border rounded-md py-1 px-2 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 ${
                                            isDarkMode
                                                ? 'bg-gray-800 text-white border-black'
                                                : 'bg-white text-gray-800 border-black'
                                        }`}
                                    >
                                        <option value="en">English</option>
                                        <option value="es">Español</option>
                                    </select>
                                    <button onClick={toggleTheme} className="ml-4 text-gray-500 hover:text-primary-500">
                                        {isDarkMode ? <BsSunFill size={20} /> : <BsMoonFill size={20} />}
                                    </button>
                                </div>

                            </div>
                            {/* Selector de idioma y cambio de tema, y Enlaces del menú */}
                            <div className='flex justify-between mt-6'>
                                <ul className="flex flex-col items-start space-y-6">
                                    <li>
                                        <a
                                            onClick={() => setIsMobileMenuOpen(false)}
                                            href="#home"
                                            aria-current="page"
                                            className={buttonStyle}
                                        >
                                            <FormattedMessage id="home" defaultMessage="Home" />
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            onClick={() => setIsMobileMenuOpen(false)}
                                            href="#projects"
                                            className={buttonStyle}
                                        >
                                            <FormattedMessage id="projects" defaultMessage="Projects" />
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            onClick={() => setIsMobileMenuOpen(false)}
                                            href="#contact"
                                            className={buttonStyle}
                                        >
                                            <FormattedMessage id="contact" defaultMessage="Contact" />
                                        </a>
                                    </li>
                                </ul>

                            </div>

                            {/* Iconos sociales */}
                            <div className="flex items-center justify-start mt-auto">
                                 <a
                                    href="mailto:jhernadezcorrea@gmail.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-500 hover:text-primary-500 mr-4"
                                    aria-label="Email"
                                >
                                    <AiOutlineMail size={20} />
                                </a>
                                <a
                                    href="https://github.com/jonathanDavid1"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-500 hover:text-primary-500 mr-4"
                                    aria-label="GitHub"
                                >
                                    <FaGithub size={20} />
                                </a>
                                <a
                                    href="https://wa.me/+573105787397"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-500 hover:text-primary-500"
                                    aria-label="WhatsApp"
                                >
                                    <RiWhatsappFill size={20} />
                                </a>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Navbar;