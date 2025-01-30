'use client';
import React from 'react';
import { useTheme } from '@/ThemeContext';

const Intro: React.FC = () => {
  const { isDarkMode } = useTheme();

  return (
    <section
      id="home"
      className="my-8 flex items-center justify-center animate-fade-in h-screen"
    >
      <div className="flex items-center flex-row-reverse">
        <img
          src="/profile1.png"
          alt="Foto de perfil de Jonathan David Hernández"
          className={`rounded-full w-40 h-40 object-cover ml-8 shadow-md ${
            isDarkMode ? 'dark:shadow-gray-800' : 'shadow-gray-300'
          }`}
        />
        <div className="text-left">
          <h1
            className={`text-4xl font-bold mb-4 ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}
          >
            Jonathan David Hernández
          </h1>
          <p
            className={`text-lg mb-8 ${
              isDarkMode ? 'text-gray-200' : 'text-gray-600'
            }`}
          >
            Desarrollador Web Full Stack con experiencia en la creación de
            aplicaciones web interactivas y un sólido conocimiento en análisis de
            datos, además de un alto dominio del inglés. Comprometido con el
            aprendizaje continuo, me mantengo actualizado en las últimas
            tendencias tecnológicas y me apasiona la creación de experiencias web
            excepcionales.
          </p>
          <a
            href="/jonathan-hernandez.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className={`py-2 px-4 rounded-md hover:bg-primary-700 transition-colors duration-200 font-medium
              ${
                isDarkMode
                  ? 'bg-gray-700 border border-gray-600 text-white hover:bg-gray-600'
                  : 'bg-gray-300 border border-black text-gray-800 hover:bg-gray-400'
              }
            `}
          >
            Descargar CV
          </a>
        </div>
      </div>
    </section>
  );
};

export default Intro;