'use client'
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { FaGithub } from 'react-icons/fa';
import { RiWhatsappFill } from 'react-icons/ri';
import { AiOutlineMail } from 'react-icons/ai';

interface ContactMeProps {}

const ContactMe: React.FC<ContactMeProps> = () => {

    const form = useRef<HTMLFormElement>(null);
    const [success, setSuccess] = useState(false);

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
            <h2 className="text-2xl font-semibold mb-4 text-text-DEFAULT">{("Contact Me")}</h2>
            <p className="text-gray-600 mb-8">Si tienes algún proyecto en mente o alguna pregunta, no dudes en contactarme. ¡Escríbeme y hablemos!</p>
              {success ? (
                 <div className="text-green-600 text-center font-medium mb-4">Mensaje enviado correctamente!</div>
             ) : null}
           <form ref={form} onSubmit={sendEmail} className="max-w-md mx-auto">
                <div className="mb-4">
                    <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Nombre</label>
                    <input type="text" name="user_name" id="name" className="shadow-sm border border-gray-300 rounded-md w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500" placeholder="Tu Nombre" required />
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
                    <input type="email" name="user_email" id="email" className="shadow-sm border border-gray-300 rounded-md w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500" placeholder="Tu Email" required />
                </div>
                <div className="mb-6">
                    <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Mensaje</label>
                    <textarea name="message" id="message" rows={5} className="shadow-sm border border-gray-300 rounded-md w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500" placeholder="Tu Mensaje" required></textarea>
                </div>
                <button type="submit" className="bg-primary-500 text-white py-2 px-4 rounded-md hover:bg-primary-700 transition-colors duration-200 font-medium">
                  Enviar Mensaje
                </button>
            </form>
            <div className="mt-8 flex justify-center space-x-4">
                 <a
                    href="mailto:jhernadezcorrea@gmail.com"
                    className="text-gray-500 hover:text-primary-500"
                     aria-label="Email"
                 >
                   <AiOutlineMail size={24} />
                </a>
                <a
                    href="https://github.com/jonathanDavid1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-primary-500"
                     aria-label="GitHub"
                   >
                     <FaGithub size={24} />
                </a>
               <a
                      href="https://wa.me/+573105787397"
                     target="_blank"
                    rel="noopener noreferrer"
                      className="text-gray-500 hover:text-primary-500"
                       aria-label="WhatsApp"
                    >
                      <RiWhatsappFill size={24} />
                 </a>
            </div>
        </section>
    );
};

export default ContactMe;