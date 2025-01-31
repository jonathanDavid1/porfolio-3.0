'use client';
import React from 'react';
import { FaMobileAlt, FaDesktop } from 'react-icons/fa';
import { FormattedMessage } from 'react-intl';
import { useTheme } from '@/ThemeContext';

const ResponsiveDesign = () => {
    const { isDarkMode } = useTheme();
    return (
        <div className="flex items-center space-x-2 transform hover:scale-105 transition-transform duration-300">
            <FaMobileAlt size={40} className={ isDarkMode ? "text-white" : "text-gray-500"}/>
           <FaDesktop size={40} className={isDarkMode ? "text-white" : "text-gray-500"}/>
             <span className={`text-lg ${isDarkMode ? 'text-white' : 'text-gray-600'}`}>
              <FormattedMessage id="responsiveDesign.title" defaultMessage="Responsive Web Design" />
            </span>
        </div>
    );
};

export default ResponsiveDesign;