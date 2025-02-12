'use client';
import React, { useState, useEffect, useRef } from 'react';
import { useTheme } from '@/ThemeContext';
import { FaGift } from 'react-icons/fa';

const Gift = ({ children, revealTitle, giftColor = 'brown-500', lidColor = 'tan-300', contentBgColor = 'bg-gray-100', iconColor = 'text-white' }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [animationStage, setAnimationStage] = useState('closed');
    const containerRef = useRef(null);
    const { isDarkMode } = useTheme();

    useEffect(() => {
        const handleMouseOver = () => {
            if (animationStage === 'closed') {
              setAnimationStage('opening');
            }
        };

        const container = containerRef.current;
        if (container) {
            container.addEventListener('mouseenter', handleMouseOver);
        }

         return () => {
           if (container) {
             container.removeEventListener('mouseenter', handleMouseOver);
           }
         }
    }, [animationStage]);

    useEffect(() => {
        if(animationStage === 'opening') {
           setTimeout(() => {
             setIsOpen(true);
             setAnimationStage('open');
           }, 500)
        }
    }, [animationStage])

    return (
        <div
            ref={containerRef}
            className={`relative w-full h-[200px] flex justify-center items-center  ${isDarkMode ? 'bg-gray-800' : contentBgColor} transition-all`}
            >
             {/* Gift Box */}
            <div className={`relative w-[150px] h-[100px] bg-${giftColor} rounded-md transform rotate-2 transition-transform duration-500 ease-in-out ${animationStage === 'open' ? 'opacity-0' : ''}  jump-animation`}>

                  {/* Lid */}
                 <div className={`absolute top-0 left-0 w-full h-[20px] bg-${lidColor} border-top-left-radius-md border-top-right-radius-md transform origin-bottom transition-transform duration-500 ease-in-out ${animationStage === 'opening' ? 'rotate-x-[-90deg]' :  ''}`}></div>
                  {/* Box Details */}
                 <div className={`absolute w-full h-full border rounded-md border-${giftColor}`}>
                  </div>
                  {/* Icon */}
                 <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  text-6xl  opacity-50    ${animationStage === 'opening' || animationStage === 'open' ? 'opacity-0' : ''} transition-opacity duration-200 ease-in-out ${iconColor}`}>
                   <FaGift  />
                 </div>
            </div>

            {/* Content */}
             <div className={`absolute top-0 left-0 w-full h-full opacity-0 flex flex-col justify-center items-center text-center p-5 transition-opacity duration-500 ease-in-out  ${isOpen ? 'opacity-100' : ''}`}>
                <h3 className={`text-lg font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    {revealTitle}
                </h3>
                {children}
            </div>
        </div>
    );
};

export default Gift;