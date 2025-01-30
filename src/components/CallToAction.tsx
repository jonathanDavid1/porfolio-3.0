'use client';
import React from 'react';
import  ResponsiveDesign from './ResponsiveDesign';
import BusinessGrowth from './BusinessGrowth';
import Automation from './Automation';
import { useTheme } from '@/ThemeContext';

const CallToAction: React.FC = () => {
  const { isDarkMode } = useTheme();


    return (
        <section className="my-16 text-center animate-fade-in">
            <h2 className={`text-3xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                ¿Listo para Transformar tu Presencia Digital?
            </h2>
            <p className={`text-lg mb-10 text-left ${isDarkMode ? 'text-gray-200' : 'text-gray-600'}`}>
            Impulsa el crecimiento de tu empresa con un desarrollador web que te ofrece soluciones sólidas, con diseños impecables y con una visión estratégica del análisis de datos. Sé parte de la transformación digital, lidera el mercado con una presencia web que marque la diferencia, explora mi trabajo.
            </p>
            <div className="flex flex-col md:flex-row justify-center items-center my-8 gap-6 ">
              <ResponsiveDesign/>
              <BusinessGrowth/>
              <Automation/>
            </div>
            <a href="#projects" className={`inline-block py-2 px-4 rounded-md hover:bg-primary-700 transition-colors duration-200 font-medium transform hover:scale-105
            ${
                isDarkMode
                ? 'bg-gray-700 border border-gray-600 text-white hover:bg-gray-600'
                : 'bg-gray-300 border border-black text-gray-800 hover:bg-gray-400'
              }
            `}>
                Explorar Mi Trabajo
            </a>
        </section>
    );
};

export default CallToAction;