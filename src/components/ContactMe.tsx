'use client';
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { FaGithub } from 'react-icons/fa';
import { RiWhatsappFill } from 'react-icons/ri';
import { AiOutlineMail } from 'react-icons/ai';
import { useTheme } from '@/ThemeContext';
import { FormattedMessage, useIntl } from 'react-intl';

const ContactMe: React.FC = () => {
    const form = useRef<HTMLFormElement>(null);
    const [success, setSuccess] = useState(false);
    const { isDarkMode } = useTheme();
    const intl = useIntl();

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
            <h2 className={`text-2xl text-center font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
             <FormattedMessage id="contactMe.title" defaultMessage="Contact Me" />
            </h2>
            <p className={` text-center mb-8 ${isDarkMode ? 'text-gray-200' : 'text-gray-600'}`}>
            <FormattedMessage id="contactMe.description" defaultMessage="If you have any project in mind or any questions, do not hesitate to contact me. Write me and let's talk!" />
           </p>
              {success ? (
                 <div className="text-green-600 text-center font-medium mb-4">
                    <FormattedMessage id="contactMe.success" defaultMessage="Message sent successfully!" />
                 </div>
             ) : null}
           <form ref={form} onSubmit={sendEmail} className="max-w-md mx-auto">
                <div className="mb-4">
                    <label htmlFor="name" className={`block font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                     <FormattedMessage id="contactMe.name" defaultMessage="Name" />
                     </label>
                    <input type="text" name="user_name" id="name" className={`shadow-sm border rounded-md w-full py-2 px-3 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 ${isDarkMode ? 'bg-gray-700 text-white border-gray-600' : 'border-gray-300 text-gray-700'}`} placeholder={intl.formatMessage({id: "contactMe.namePlaceholder", defaultMessage:"Your Name"})} required />
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className={`block font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                     <FormattedMessage id="contactMe.email" defaultMessage="Email" />
                    </label>
                    <input type="email" name="user_email" id="email" className={`shadow-sm border rounded-md w-full py-2 px-3 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 ${isDarkMode ? 'bg-gray-700 text-white border-gray-600' : 'border-gray-300 text-gray-700'}`} placeholder={intl.formatMessage({id: "contactMe.emailPlaceholder", defaultMessage:"Your Email"})} required />
                </div>
                <div className="mb-6">
                    <label htmlFor="message" className={`block font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                     <FormattedMessage id="contactMe.message" defaultMessage="Message" />
                    </label>
                    <textarea name="message" id="message" rows={5} className={`shadow-sm border rounded-md w-full py-2 px-3 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 ${isDarkMode ? 'bg-gray-700 text-white border-gray-600' : 'border-gray-300 text-gray-700'}`} placeholder={intl.formatMessage({id: "contactMe.messagePlaceholder", defaultMessage: "Your Message"})} required></textarea>
                </div>
                <button type="submit" className={`py-2 px-4 rounded-md hover:bg-primary-700 transition-colors duration-200 font-medium
                   ${
                    isDarkMode ? 'bg-gray-700 text-white hover:bg-gray-600' : 'bg-gray-300 border border-black text-gray-800 hover:bg-gray-400'
                   }
                   `}>
                 <FormattedMessage id="contactMe.send" defaultMessage="Send Message" />
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