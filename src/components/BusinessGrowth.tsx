'use client';
import React from 'react';
import { FaChartLine } from 'react-icons/fa';
import { FormattedMessage } from 'react-intl';
import { useTheme } from '@/ThemeContext';

const BusinessGrowth = () => {
     const { isDarkMode } = useTheme();
    return (
        <div className="flex items-center space-x-2 transform hover:scale-105 transition-transform duration-300">
           <FaChartLine size={40} className={isDarkMode ? "text-white" : "text-gray-500"}/>
           <span className={`text-lg ${isDarkMode ? 'text-white' : 'text-gray-600'}`}>
             <FormattedMessage id="businessGrowth.title" defaultMessage="Boost Your Growth" />
            </span>
        </div>
    );
};

export default BusinessGrowth;