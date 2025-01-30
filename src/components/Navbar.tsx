'use client';

import React, { useCallback } from 'react';
import { FaGithub } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';
import { RiWhatsappFill } from 'react-icons/ri';
import { useTranslation } from 'next-i18next';
import { BsMoonFill, BsSunFill } from 'react-icons/bs';
import { useTheme } from '@/ThemeContext';
import { useRouter } from 'next/navigation';
import i18next from 'i18next';


const Navbar: React.FC = () => {
    const { t } = useTranslation('common');
    const { isDarkMode, toggleTheme } = useTheme();
    const router = useRouter()

    const capitalize = (str: string): string => {
        if (!str) return '';
        return str
            .split(' ')
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
    };



    return (
        <header
            className={`py-4 fixed top-0 left-0 w-full z-20 transition-shadow duration-200 ${
                isDarkMode ? 'shadow-md bg-black' : 'shadow-md bg-white'
            }`}
        >
            <div className="container mx-auto flex justify-between items-center sm:flex-col sm:justify-center sm:items-center sm:gap-x-2 lg:flex-row lg:items-center lg:justify-between">
                <nav>
                    <ul className="flex space-x-6 sm:space-x-0 sm:space-y-4 lg:space-x-6 lg:space-y-0">
                        <li>
                            <a
                                href="#home"
                                aria-current="page"
                                className="text-text-DEFAULT dark:text-white hover:text-primary-500 font-medium bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded-md border border-gray-200 dark:border-gray-700"
                            >
                                {capitalize(t('home'))}
                            </a>
                        </li>
                        <li>
                            <a
                                href="#projects"
                                className="text-text-DEFAULT dark:text-white hover:text-primary-500 font-medium bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded-md border border-gray-200 dark:border-gray-700"
                            >
                                {capitalize(t('projects'))}
                            </a>
                        </li>
                        <li>
                            <a
                                href="#contact"
                                className="text-text-DEFAULT dark:text-white hover:text-primary-500 font-medium bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded-md border border-gray-200 dark:border-gray-700"
                            >
                                {capitalize(t('contact'))}
                            </a>
                        </li>
                    </ul>
                </nav>
                <div className="flex space-x-4 sm:space-x-0 sm:space-y-4 lg:space-x-4 lg:space-y-0 items-center">
                    <a
                        href="mailto:jhernadezcorrea@gmail.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-500 hover:text-primary-500"
                        aria-label="Email"
                    >
                        <AiOutlineMail size={20} />
                    </a>
                    <a
                        href="https://github.com/jonathanDavid1"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-500 hover:text-primary-500"
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
                    <button onClick={toggleTheme} className="ml-5 text-gray-500 hover:text-primary-500">
                        {isDarkMode ? <BsSunFill size={20} /> : <BsMoonFill size={20} />}
                    </button>
                   {/*  <select
                        onChange={handleLanguageChange}
                        defaultValue={i18next.language}
                        className="ml-5 border border-gray-300 rounded-md py-1 px-2 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    >
                        <option value="en">English</option>
                        <option value="es">Español</option>
                    </select> */}
                </div>
            </div>
        </header>
    );
};

export default Navbar;