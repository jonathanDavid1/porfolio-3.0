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
            Ready to Transform Your Digital Presence
            </h2>
            <p className={`text-lg mb-10 text-left ${isDarkMode ? 'text-gray-200' : 'text-gray-600'}`}>
            Boost your company's growth with a web developer that offers you solid solutions, with impeccable designs, and a strategic vision of data analysis. Be part of the digital transformation, lead the market with a web presence that makes a difference, explore my work.
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
                Explore My Work
            </a>
        </section>
    );
};

export default CallToAction;