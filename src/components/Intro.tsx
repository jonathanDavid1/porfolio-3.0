'use client';
import React from 'react';
import { useTheme } from '@/ThemeContext';
import { FormattedMessage, useIntl } from 'react-intl';

const Intro: React.FC = () => {
  const { isDarkMode } = useTheme();
  const intl = useIntl();
  const currentLocale = intl.locale;

  // Determina la URL del PDF basándose en el idioma
  const cvPdfUrl = currentLocale === 'es'
    ? '/cv dev jonathan SD.pdf'  // PDF en español
    : '/cv dev jonathan ED.pdf'; // PDF en inglés

  return (
    <section
      id="home"
      className="my-8 flex items-center justify-center animate-fade-in h-screen"
    >
      {/* Removed container, mx-auto, px-4 */}
      <div className="flex flex-col md:flex-row-reverse items-center"> {/* Reverted to original desktop layout */}
        <img
          src="/profile1.png"
          alt="Foto de perfil de Jonathan David Hernández"
          className={`rounded-full w-40 h-40 object-cover ml-8 shadow-md ${  // Removed mb-4, kept ml-8
            isDarkMode ? 'dark:shadow-gray-800' : 'shadow-gray-300'
          }`}
        />
        <div className="text-left"> {/* Removed w-full, md:w-auto, text-center */}
          <h1
            className={`text-4xl font-bold mb-4 sm:m-0 ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}
          >
            <FormattedMessage id="intro.title" defaultMessage="Jonathan David Hernández"/>
          </h1>
          <p
            className={`text-lg mb-8 ${
              isDarkMode ? 'text-gray-200' : 'text-gray-600'
            }`}
          >
            <FormattedMessage
              id="intro.description"
              defaultMessage="Full Stack Web Developer with experience in creating interactive web applications and a strong knowledge in data analysis, in addition to a high command of English. Committed to continuous learning, I keep up-to-date with the latest technological trends and I am passionate about creating exceptional web experiences."
            />
          </p>
          <a
            href={cvPdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`py-2 px-4 rounded-md hover:bg-primary-700 transition-colors duration-200 font-medium inline-block
              ${
                isDarkMode
                  ? 'bg-gray-700 border border-gray-600 text-white hover:bg-gray-600'
                  : 'bg-gray-300 border border-black text-gray-800 hover:bg-gray-400'
              }
            `}
          >
            <FormattedMessage id="intro.downloadCv" defaultMessage="Download CV"/>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Intro;