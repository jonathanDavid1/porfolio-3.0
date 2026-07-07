'use client';
import React from 'react';
import { FaCogs } from 'react-icons/fa';
import { FormattedMessage } from 'react-intl';
import { useTheme } from '@/ThemeContext';

const Automation = () => {
    const { isDarkMode } = useTheme();
    return (
        <div className={`flex flex-col items-center text-center p-6 rounded-2xl border transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg w-full md:w-64 ${
            isDarkMode 
                ? 'bg-gray-800/40 border-gray-700/50 text-white hover:border-purple-500/40' 
                : 'bg-white/40 border-gray-200/60 text-gray-800 hover:border-purple-500/30 shadow-sm'
        }`}>
            <div className="flex items-center justify-center mb-4 w-14 h-14 rounded-full bg-purple-500/10 dark:bg-purple-500/20 text-purple-500 dark:text-purple-400">
                <FaCogs size={22} />
            </div>
            <span className="font-bold text-base leading-snug">
                <FormattedMessage id="automation.title" defaultMessage="Task Automation" />
            </span>
        </div>
    );
};

export default Automation;