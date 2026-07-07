'use client';
import React from 'react';
import { FaMobileAlt, FaDesktop } from 'react-icons/fa';
import { FormattedMessage } from 'react-intl';
import { useTheme } from '@/ThemeContext';

const ResponsiveDesign = () => {
    const { isDarkMode } = useTheme();
    return (
        <div className={`flex flex-col items-center text-center p-6 rounded-2xl border transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg w-full md:w-64 ${
            isDarkMode 
                ? 'bg-gray-800/40 border-gray-700/50 text-white hover:border-blue-500/40' 
                : 'bg-white/40 border-gray-200/60 text-gray-800 hover:border-blue-500/30 shadow-sm'
        }`}>
            <div className="flex items-center justify-center gap-1.5 mb-4 w-14 h-14 rounded-full bg-blue-500/10 dark:bg-blue-500/20 text-blue-500 dark:text-blue-400">
                <FaMobileAlt size={22} />
                <FaDesktop size={22} />
            </div>
            <span className="font-bold text-base leading-snug">
                <FormattedMessage id="responsiveDesign.title" defaultMessage="Responsive Web Design" />
            </span>
        </div>
    );
};

export default ResponsiveDesign;