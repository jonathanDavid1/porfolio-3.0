'use client'
import React from 'react';
import { FaChartLine } from 'react-icons/fa';


const BusinessGrowth = () => {
    return (
        <div className="flex items-center space-x-2 transform hover:scale-105 transition-transform duration-300">
           <FaChartLine size={40} className="text-gray-500" />
           <span className="text-gray-600 text-lg">
           Boost Your Growth
            </span>
        </div>
    );
};

export default BusinessGrowth;