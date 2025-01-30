'use client'
import React from 'react';
import { FaMobileAlt, FaDesktop } from 'react-icons/fa';


const ResponsiveDesign = () => {
    return (
        <div className="flex items-center space-x-2 transform hover:scale-105 transition-transform duration-300">
            <FaMobileAlt size={40} className="text-gray-500" />
           <FaDesktop size={40} className="text-gray-500" />
             <span className="text-gray-600 text-lg">
             Responsive Web Design
            </span>
        </div>
    );
};

export default ResponsiveDesign;