'use client'
import React from 'react';


interface IntroProps {}

const Intro: React.FC<IntroProps> = () => {


    return (
        <section id="home" className="my-8 flex items-center justify-center animate-fade-in h-screen">
            <div className="flex items-center flex-row-reverse">
                 <img
                    src="/profile1.png"
                    alt="Foto de perfil de Jonathan David Hernández"
                    className="rounded-full w-40 h-40 object-cover ml-8 shadow-md"
                 />
               <div className="text-left">
                 <h1 className="text-4xl font-bold mb-4 text-text-DEFAULT">Jonathan David Hernández</h1>
                <p className="text-gray-600 text-lg mb-8">Desarrollador Web Full Stack con experiencia en la creación de aplicaciones web interactivas y un sólido conocimiento en análisis de datos, además de un alto dominio del inglés. Comprometido con el aprendizaje continuo, me mantengo actualizado en las últimas tendencias tecnológicas y me apasiona la creación de experiencias web excepcionales.</p>
                <a
                    href="/jonathan-hernandez.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  className="bg-primary-500 text-white py-2 px-4 rounded-md hover:bg-primary-700 transition-colors duration-200 font-medium"
                >
                   Descargar CV
                </a>
             </div>
          </div>
        </section>
    );
};

export default Intro;