'use client'
import React from 'react';
import ProjectCard from './ProjectCard';

interface ProjectsProps {}

const Projects: React.FC<ProjectsProps> = () => {
    const projects = [
        {
            title: "Portafolio Web",
            description: "Mi portafolio web personal, donde muestro mis habilidades y proyectos.",
            imageUrl: "/project1.png",
            projectUrl: "https://jonathan-hernandez-porfolio.netlify.app/",
            githubUrl: "https://github.com/jonathanDavid1/my-portafolio",
            technologies: ["Next.js", "Tailwind CSS", "React", "JavaScript", "TypeScript", "Node.js", "MongoDB"]
        },
        {
            title: "Aplicación de Tareas",
            description: "Una aplicación de tareas para organizar y gestionar las tareas diarias.",
            imageUrl: "/project2.png",
           projectUrl: "https://mi-aplicacion-de-tareas.com",
            githubUrl: "https://github.com/jonathanDavid1/mi-aplicacion-de-tareas",
            technologies: ["React", "Node.js", "MongoDB", "Express"],
        },
        {
           title: "Web de Ecommerce",
            description: "Una web de comercio electrónico con la que simulo una web real.",
            imageUrl: "/project3.png",
            projectUrl: "https://mi-web-ecommerce.com",
            githubUrl: "https://github.com/jonathanDavid1/mi-web-ecommerce",
            technologies: ["Next.js", "Tailwind CSS", "React", "Strapi"],
        },
        {
          title: "Analisis de datos con Python",
             description: "Un proyecto de analisis de datos usando librerías de Python.",
           imageUrl: "/project4.png",
            projectUrl: "https://mi-analisis-de-datos.com",
           githubUrl: "https://github.com/jonathanDavid1/mi-analisis-de-datos",
            technologies: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn"],
        },
    ];

    return (
        <section id="projects" className="my-8">
            <h2 className="text-2xl font-semibold mb-4 text-text-DEFAULT">Proyectos</h2>
            <div className="md:grid md:grid-cols-2 md:gap-6">
                {projects.map((project, index) => (
                    <ProjectCard key={index} {...project} />
                ))}
            </div>
        </section>
    );
};

export default Projects;