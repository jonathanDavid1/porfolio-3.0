'use client'
import React, { useState, useEffect } from 'react';
import { FaGithub } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';
import { RiWhatsappFill } from 'react-icons/ri';

interface HeaderSimpleProps {}

const HeaderSimple: React.FC<HeaderSimpleProps> = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
               setIsScrolled(true);
             } else {
               setIsScrolled(false);
            }
         };

         window.addEventListener('scroll', handleScroll);

         return () => {
              window.removeEventListener('scroll', handleScroll);
          };
     }, []);


    return (
        <header className={`py-4 fixed top-0 left-0 w-full z-20 transition-shadow duration-200 ${isScrolled ? 'shadow-md' : ''}`}>
          <div className="container mx-auto flex items-center justify-between sm:flex-col sm:justify-center sm:items-center sm:gap-x-2 lg:flex-row lg:items-center lg:justify-between">
              <ul className="flex space-x-6 sm:space-x-0 sm:space-y-4 lg:space-x-6 lg:space-y-0">
                 <li>
                    <a href="#home" className="text-text-DEFAULT hover:text-primary-500 font-medium  px-2 py-1 rounded-md border border-gray-200 dark:border-gray-700">Home</a>
                 </li>
                 <li>
                    <a href="#projects" className="text-text-DEFAULT hover:text-primary-500 font-medium  px-2 py-1 rounded-md border border-gray-200 dark:border-gray-700">Projects</a>
                 </li>
                 <li>
                    <a href="#contact" className="text-text-DEFAULT hover:text-primary-500 font-medium  px-2 py-1 rounded-md border border-gray-200 dark:border-gray-700">Contact</a>
                 </li>
               </ul>
              <div className="flex space-x-4 sm:space-x-0 sm:space-y-4 lg:space-x-4 lg:space-y-0">
                 <a
                      href="mailto:jhernadezcorrea@gmail.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-500 hover:text-primary-500"
                       aria-label="Email"
                    >
                      <AiOutlineMail size={20} />
                 </a>
                 <a
                   href="https://github.com/jonathanDavid1"
                   target="_blank"
                   rel="noopener noreferrer"
                   className="text-gray-500 hover:text-primary-500"
                    aria-label="GitHub"
                  >
                      <FaGithub size={20} />
                 </a>
                <a
                   href="https://wa.me/+573105787397"
                   target="_blank"
                   rel="noopener noreferrer"
                   className="text-gray-500 hover:text-primary-500"
                     aria-label="WhatsApp"
                   >
                      <RiWhatsappFill size={20} />
                 </a>
             </div>
        </div>
       </header>
    );
};

export default HeaderSimple;