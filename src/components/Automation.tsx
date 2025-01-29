'use client'
import React from 'react';
import { FaCogs } from 'react-icons/fa';


const Automation = () => {
    return (
       <div className="flex items-center space-x-2 transform hover:scale-105 transition-transform duration-300">
            <FaCogs size={40} className="text-gray-500" />
             <span className="text-gray-600 text-lg">
               Automatización de Tareas
            </span>
        </div>
    );
};

export default Automation;