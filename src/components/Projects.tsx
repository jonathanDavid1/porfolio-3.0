'use client';
import React from 'react';
import ProjectCard from './ProjectCard';
import { useTheme } from '@/ThemeContext';
import { FormattedMessage } from 'react-intl';

const Projects: React.FC = () => {
    const { isDarkMode } = useTheme();
    const projects = [
        {
            title: "Serendicus",
            description: "Serendicus is a project created in Next.js where I showcase beautiful places in the area where I live and promote properties for sale.",
            imageUrl: "/serendicus.png",
            projectUrl: "https://serendicus.com/",
            githubUrl: "https://github.com/jonathanDavid1/my-portafolio",
            technologies: ["Next.js", "Tailwind CSS", "React", "JavaScript", "TypeScript", "GitHub", "Git", "Netlify","SEO"],
            iconColor: "gold"  // Color válido
        },
        {
            title: "POKEDEX",
            description: "Pokedex is a webpage created with React.js where you can find all the Pokémon and their characteristics.",
            imageUrl: "/pokedex.png",
            projectUrl: "https://pokedexwithreactandredux.netlify.app/pokedex",
            githubUrl: "https://github.com/jonathanDavid1/mi-aplicacion-de-tareas",
            technologies: ["React", "Node.js", "MongoDB", "Express"],
            iconColor: "silver"  // Color válido

        },
        {
            title: "Web de Ecommerce",
            description: "An ecommerce created with Vanilla JS where you can purchase a wide variety of shirts.",
            imageUrl: "/ecommerce.png",
            projectUrl: "https://carrito-de-compras-colombia.netlify.app/#",
            githubUrl: "https://github.com/jonathanDavid1/mi-web-ecommerce",
            technologies: ["Next.js", "Tailwind CSS", "React", "Strapi"],
            iconColor: "purple"   // Color válido
        },
        {
            title: "GifMusic",
            description: "Full-stack project using React, Node.js, and Spotify API to build a custom, intuitive playlist interface.",
            imageUrl: "/gift music.png",
            projectUrl: "https://app-music-spotify.netlify.app/",
            githubUrl: "https://github.com/jonathanDavid1/app-music",
            technologies: ["Node js", "React", "Tailwind", "API", "Zustang"],
            iconColor: "blue"   // Color válido

        },
        {
            title: "Data Analysis with Python",
            description: "A data analysis project using Python libraries.",
            imageUrl: "/matplot.png",
            projectUrl: "https://colab.research.google.com/drive/1KQplG7yKFuTgjfIPygNfcOBAstqN72jg",
            githubUrl: "https://github.com/jonathanDavid1/mi-analisis-de-datos",
            technologies: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn"],
            iconColor: "red"  

        },
    ];

    return (
        <section id="projects" className="my-8">
            <h2 className={`text-3xl text-center font-semibold mb-8 ${isDarkMode ? 'text-white' : 'text-gray-900' }`}>
              <FormattedMessage id="projects.title" defaultMessage="Projects" />
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-6">
                {projects.map((project, index) => (
                    <ProjectCard key={index} {...project} />
                ))}
            </div>
        </section>
    );
};

export default Projects;