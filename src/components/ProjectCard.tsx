'use client'
import React, { useState, useEffect, useRef } from 'react';
import { FaGithub } from 'react-icons/fa';
import {
  FaReact,
  FaHtml5,
  FaCss3,
  FaJs,
  FaNodeJs,
  FaPython,
  FaGitAlt,
  FaDocker,
   FaJava,
   FaDatabase,
} from 'react-icons/fa';
import {
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
   SiExpress,
} from 'react-icons/si';
import { MdOutlineSettingsInputSvideo } from "react-icons/md";

interface ProjectCardProps {
    title: string;
    description: string;
    imageUrl: string;
    projectUrl: string;
    githubUrl: string;
    technologies: string[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, imageUrl, projectUrl, githubUrl, technologies }) => {
    const carouselRef = useRef<HTMLDivElement>(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const visibleCount = 4;
     const itemWidth = 100 / visibleCount;

     const extendedTechnologies = [...technologies, ...technologies, ...technologies.slice(0, visibleCount)];

     useEffect(() => {
         const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => prevIndex + 1);
         }, 2000);

         return () => clearInterval(interval);
      }, []);

    useEffect(() => {
       if (carouselRef.current) {
           carouselRef.current.style.transition = 'transform 0.5s ease-in-out';
          carouselRef.current.style.transform = `translateX(-${(currentIndex % extendedTechnologies.length) * itemWidth}%)`;
         }
      }, [currentIndex, itemWidth, extendedTechnologies.length]);

     const getIcon = (skill: string) => {
        switch (skill) {
            case 'HTML5':
                return <FaHtml5 />;
            case 'CSS3':
                return <FaCss3 />;
            case 'JavaScript (ES6+)':
                return <FaJs />;
            case 'React.js':
                return <FaReact />;
           case 'Next.js':
             return <SiNextdotjs />;
            case 'Node.js':
                return <FaNodeJs />;
            case 'Express.js':
               return <SiExpress />;
             case 'Python (Pandas, NumPy, Matplotlib, Seaborn)':
                return <FaPython />;
            case 'Git':
                 return <FaGitAlt />;
            case 'Docker':
              return <FaDocker />;
               case 'Java':
                 return <FaJava />;
            case 'TypeScript':
                return <SiTypescript />;
           case 'PostgreSQL':
              case 'SQL':
                return <FaDatabase />;
           case 'Optimización SEO':
              case 'Diseño Responsivo':
                case 'Maquetación de landing pages':
               case 'Single Pages Applications':
               return <MdOutlineSettingsInputSvideo />;
            default:
             return null;
        }
    };

    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6">
           <img src={imageUrl} alt={title} className="w-full h-56 object-cover" />
            <div className="p-6 flex flex-col items-center">
               <h3 className="text-xl font-semibold mb-2 text-text-DEFAULT text-left">{title}</h3>
               <p className="text-gray-600 mb-4">{description}</p>
               <div className="mb-4 w-full">
                   <div className="flex space-x-4">
                       <a href={projectUrl} target="_blank" rel="noopener noreferrer" className="bg-primary-500 text-white py-2 px-4 rounded-md hover:bg-primary-700 transition-colors duration-200 font-medium">Ver Proyecto</a>
                         <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-primary-500">
                          <FaGithub size={24} />
                        </a>
                    </div>
                   <a href={projectUrl} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-primary-500 text-right block">
                       {projectUrl}
                   </a>
             </div>
               <div className="overflow-hidden relative w-full">
                    <div
                        ref={carouselRef}
                     className="flex w-max transition-transform duration-2000"
                        style={{
                           transform: `translateX(-${(currentIndex % extendedTechnologies.length) * itemWidth}%)`,
                          width: `${extendedTechnologies.length * itemWidth}%`,
                      }}
                    >
                     {extendedTechnologies.map((tech, index) => (
                          <div
                                 key={index}
                                className="flex-shrink-0 text-center bg-gray-200 rounded-md py-1 px-2 mr-2 flex items-center gap-2 w-1/4"
                           >
                            {getIcon(tech)}
                              {tech}
                            </div>
                      ))}
                  </div>
                </div>
         </div>
     </div>
    );
};

export default ProjectCard;