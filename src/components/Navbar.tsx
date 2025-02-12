'use client';

import React from 'react';
import { FaGithub } from 'react-icons/fa';
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

  // Define los estilos base del texto según el tema
  const textStyle = `text-gray-700  hover:text-primary-500 font-medium  px-2 py-1 rounded-md border border-gray-300  transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500  `;
  const buttonStyle = isDarkMode
    ? `${textStyle} text-white bg-gray-800 border-gray-700`
    : `${textStyle} bg-gray-100 `;

  // Función para construir la URL con el nuevo locale
  const createURL = (newLocale: string) => {
    // Eliminar el locale actual del pathname si existe
    const cleanPathname = pathname.startsWith(`/${locale}`) ? pathname.slice(3) : pathname;

    // Construir la nueva URL
    return `/${newLocale}${cleanPathname}`;
  };

  return (
    <header
      className={`py-4 fixed top-0 left-0 w-full z-20 transition-shadow duration-200 ${
        isDarkMode ? 'shadow-md bg-black' : 'shadow-md bg-gray-50'
      }`}
    >
      <div className="container mx-auto flex justify-between items-center sm:flex-col sm:justify-center sm:items-center sm:gap-x-2 lg:flex-row lg:items-center lg:justify-between">
        <nav>
          <ul className="flex space-x-6 sm:space-x-0 sm:space-y-4 lg:space-x-6 lg:space-y-0">
            <li>
              <a
                href="#home"
                aria-current="page"
                className={buttonStyle}
              >
                <FormattedMessage id="home" defaultMessage="Home" />
              </a>
            </li>
            <li>
              <a
                href="#projects"
                 className={buttonStyle}
              >
                <FormattedMessage id="projects" defaultMessage="Projects" />
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className={buttonStyle}
              >
                <FormattedMessage id="contact" defaultMessage="Contact" />
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
          <select
            onChange={(event) => {
              const newLocale = event.target.value;
              // Construir la URL con el nuevo locale
              const newURL = createURL(newLocale);
              router.push(newURL);
              setLocale(newLocale);
            }}
            defaultValue={locale}
            className={`ml-5 border rounded-md py-1 px-2 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 ${
              isDarkMode
                ? 'bg-gray-800 text-white border-black'
                : 'bg-white text-gray-800 border-black'
            }`}
          >
            <option value="en">English</option>
            <option value="es">Español</option>
          </select>
        </div>
      </div>
    </header>
  );
};

export default Navbar;