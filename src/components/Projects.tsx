'use client';
import React from 'react';
import ProjectCard from './ProjectCard';
import { useTheme } from '@/ThemeContext';


const Projects: React.FC = () => {
    const { isDarkMode } = useTheme();
    const projects = [
        {
            title: "Serendicus",
            description: "Mi portafolio web personal, donde muestro mis habilidades y proyectos.",
            imageUrl: "/serendicus.png",
            projectUrl: "https://jonathan-hernandez-porfolio.netlify.app/",
            githubUrl: "https://github.com/jonathanDavid1/my-portafolio",
            technologies: ["Next.js", "Tailwind CSS", "React", "JavaScript", "TypeScript", "Node.js", "MongoDB"]
        },
        {
            title: "POKEDEX",
            description: "Una aplicación de tareas para organizar y gestionar las tareas diarias.",
            imageUrl: "/pokedex.png",
           projectUrl: "https://pokedexwithreactandredux.netlify.app/",
            githubUrl: "https://github.com/jonathanDavid1/mi-aplicacion-de-tareas",
            technologies: ["React", "Node.js", "MongoDB", "Express"],
        },
        {
           title: "Web de Ecommerce",
            description: "Una web de comercio electrónico con la que simulo una web real.",
            imageUrl: "/ecommerce.png",
            projectUrl: "https://carrito-de-compras-colombia.netlify.app/#",
            githubUrl: "https://github.com/jonathanDavid1/mi-web-ecommerce",
            technologies: ["Next.js", "Tailwind CSS", "React", "Strapi"],
        },
        {
          title: "Analisis de datos con Python",
             description: "Un proyecto de analisis de datos usando librerías de Python.",
           imageUrl: "/matplot.png",
            projectUrl: "https://mi-analisis-de-datos.com",
           githubUrl: "https://github.com/jonathanDavid1/mi-analisis-de-datos",
            technologies: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn"],
        },
    ];

    return (
        <section id="projects" className="my-8">
            <h2 className={`text-2xl font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Proyectos</h2>
            <div className="md:grid md:grid-cols-2 md:gap-6">
                {projects.map((project, index) => (
                    <ProjectCard key={index} {...project} />
                ))}
            </div>
        </section>
    );
};

export default Projects;