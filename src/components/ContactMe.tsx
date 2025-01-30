'use client';
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { FaGithub } from 'react-icons/fa';
import { RiWhatsappFill } from 'react-icons/ri';
import { AiOutlineMail } from 'react-icons/ai';
import { useTheme } from '@/ThemeContext';

const ContactMe: React.FC = () => {
    const form = useRef<HTMLFormElement>(null);
    const [success, setSuccess] = useState(false);
    const { isDarkMode } = useTheme();

    const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!form.current) return;

        try{
         const result = await emailjs.sendForm(
           'service_a3rtba8',
            'template_digiwle',
           form.current,
             'LuCMKTOFR-6by99PI'
         )
         console.log(result.text);
         setSuccess(true);
          form.current.reset();
        } catch(error){
           console.log(error)
            setSuccess(false);
        }
    };

    return (
        <section id="contact" className="my-8">
            <h2 className={`text-2xl font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Contact Me</h2>
            <p className={`mb-8 ${isDarkMode ? 'text-gray-200' : 'text-gray-600'}`}>
            Si tienes algún proyecto en mente o alguna pregunta, no dudes en contactarme. ¡Escríbeme y hablemos!
           </p>
              {success ? (
                 <div className="text-green-600 text-center font-medium mb-4">Mensaje enviado correctamente!</div>
             ) : null}
           <form ref={form} onSubmit={sendEmail} className="max-w-md mx-auto">
                <div className="mb-4">
                    <label htmlFor="name" className={`block font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Nombre</label>
                    <input type="text" name="user_name" id="name" className={`shadow-sm border rounded-md w-full py-2 px-3 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 ${isDarkMode ? 'bg-gray-700 text-white border-gray-600' : 'border-gray-300 text-gray-700'}`} placeholder="Tu Nombre" required />
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className={`block font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Email</label>
                    <input type="email" name="user_email" id="email" className={`shadow-sm border rounded-md w-full py-2 px-3 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 ${isDarkMode ? 'bg-gray-700 text-white border-gray-600' : 'border-gray-300 text-gray-700'}`} placeholder="Tu Email" required />
                </div>
                <div className="mb-6">
                    <label htmlFor="message" className={`block font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Mensaje</label>
                    <textarea name="message" id="message" rows={5} className={`shadow-sm border rounded-md w-full py-2 px-3 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 ${isDarkMode ? 'bg-gray-700 text-white border-gray-600' : 'border-gray-300 text-gray-700'}`} placeholder="Tu Mensaje" required></textarea>
                </div>
                <button type="submit" className={`py-2 px-4 rounded-md hover:bg-primary-700 transition-colors duration-200 font-medium
                   ${
                    isDarkMode ? 'bg-gray-700 text-white hover:bg-gray-600' : 'bg-primary-500 text-white'
                   }
                   `}>
                  Enviar Mensaje
                </button>
            </form>
            <div className="mt-8 flex justify-center space-x-4">
                 <a
                    href="mailto:jhernadezcorrea@gmail.com"
                    className={`hover:text-primary-500 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}
                     aria-label="Email"
                 >
                   <AiOutlineMail size={24} />
                </a>
                <a
                    href="https://github.com/jonathanDavid1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`hover:text-primary-500 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}
                     aria-label="GitHub"
                   >
                     <FaGithub size={24} />
                </a>
               <a
                      href="https://wa.me/+573105787397"
                     target="_blank"
                    rel="noopener noreferrer"
                      className={`hover:text-primary-500 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}
                       aria-label="WhatsApp"
                    >
                      <RiWhatsappFill size={24} />
                 </a>
            </div>
        </section>
    );
};

export default ContactMe;