'use client';
import React from 'react';
import ProjectCard from './ProjectCard';
import { useTheme } from '@/ThemeContext';


const Projects: React.FC = () => {
    const { isDarkMode } = useTheme();
    const projects = [
        {
            title: "Serendicus",
            description: "Serendicus is a project created in Next.js where I showcase beautiful places in the area where I live and promote properties for sale.",
            imageUrl: "/serendicus.png",
            projectUrl: "https://serendicus.com/",
            githubUrl: "https://github.com/jonathanDavid1/my-portafolio",
            technologies: ["Next.js", "Tailwind CSS", "React", "JavaScript", "TypeScript", "GitHub", "Git", "Netlify","SEO"]
        },
        {
            title: "POKEDEX",
            description: "Pokedex is a webpage created with React.js where you can find all the Pokémon and their characteristics.",
            imageUrl: "/pokedex.png",
           projectUrl: "https://pokedexwithreactandredux.netlify.app/pokedex",
            githubUrl: "https://github.com/jonathanDavid1/mi-aplicacion-de-tareas",
            technologies: ["React", "Node.js", "MongoDB", "Express"],
        },
        {
           title: "Web de Ecommerce",
            description: "An ecommerce created with Vanilla JS where you can purchase a wide variety of shirts.",
            imageUrl: "/ecommerce.png",
            projectUrl: "https://carrito-de-compras-colombia.netlify.app/#",
            githubUrl: "https://github.com/jonathanDavid1/mi-web-ecommerce",
            technologies: ["Next.js", "Tailwind CSS", "React", "Strapi"],
        },
        {
          title: "Data Analysis with Python",
             description: "A data analysis project using Python libraries.",
           imageUrl: "/matplot.png",
            projectUrl: "https://colab.research.google.com/drive/1KQplG7yKFuTgjfIPygNfcOBAstqN72jg",
           githubUrl: "https://github.com/jonathanDavid1/mi-analisis-de-datos",
            technologies: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn"],
        },
    ];

    return (
        <section id="projects" className="my-8">
            <h2 className={`text-2xl text-center font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900' }`}>Projects</h2>
            <div className="md:grid md:grid-cols-2 md:gap-6">
                {projects.map((project, index) => (
                    <ProjectCard key={index} {...project} />
                ))}
            </div>
        </section>
    );
};

export default Projects;