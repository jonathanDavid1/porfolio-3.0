'use client'
import React from 'react';
import  ResponsiveDesign from './ResponsiveDesign';
import BusinessGrowth from './BusinessGrowth';
import Automation from './Automation';

interface CallToActionProps {}

const CallToAction: React.FC<CallToActionProps> = () => {

    return (
        <section className="my-16 text-center animate-fade-in">
            <h2 className="text-3xl font-bold mb-6 text-text-DEFAULT">
                ¿Listo para Transformar tu Presencia Digital?
            </h2>
            <p className="text-gray-600 text-lg mb-10 text-left">
            Impulsa el crecimiento de tu empresa con un desarrollador web que te ofrece soluciones sólidas, con diseños impecables y con una visión estratégica del análisis de datos. Sé parte de la transformación digital, lidera el mercado con una presencia web que marque la diferencia, explora mi trabajo.
            </p>
            <div className="flex flex-col md:flex-row justify-center items-center my-8 gap-6 ">
              <ResponsiveDesign/>
              <BusinessGrowth/>
              <Automation/>
            </div>
            <a href="#projects" className="inline-block bg-primary-500 text-white py-3 px-6 rounded-md hover:bg-primary-700 transition-colors duration-200 font-medium transform hover:scale-105">
                Explorar Mi Trabajo
            </a>
        </section>
    );
};

export default CallToAction;