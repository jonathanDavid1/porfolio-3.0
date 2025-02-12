'use client';
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
import { useTheme } from '@/ThemeContext';
import { FormattedMessage } from 'react-intl';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGift } from '@fortawesome/free-solid-svg-icons';

interface ProjectCardProps {
    title: string;
    description: string;
    imageUrl: string;
    projectUrl: string;
    githubUrl: string;
    technologies: string[];
    iconColor: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
    title,
    description,
    imageUrl,
    projectUrl,
    githubUrl,
    technologies,
    iconColor

}) => {
    const { isDarkMode } = useTheme();
    const carouselRef = useRef<HTMLDivElement>(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const visibleCount = 4;
    const itemWidth = 100 / visibleCount;
    const [isRevealed, setIsRevealed] = useState(false);

    const extendedTechnologies = [...technologies, ...technologies, ...technologies.slice(0, visibleCount)];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % extendedTechnologies.length)
        }, 2000)
        return () => {
            clearInterval(interval)
        }
    }, [extendedTechnologies.length]);

    const handleMouseEnter = () => {
        setIsRevealed(true);
    };

    const handleMouseLeave = () => {
       // Eliminar esta función o dejarla vacía
       // setIsRevealed(false); // Eliminar esta línea
    };

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
                return <MdOutlineSettingsInputSvideo />;
            default:
                return null;
        }
    };

    return (
        <>
          {/* Estilos CSS para la animación de salto */}
          <style>
            {`
              @keyframes jump {
                0% {
                  transform: translateY(0);
                }
                50% {
                  transform: translateY(-10px); /* Ajusta la altura del salto */
                }
                100% {
                  transform: translateY(0);
                }
              }

              .jump-animation {
                animation: jump 1s infinite; /* Duración y repetición de la animación */
              }
            `}
          </style>

          <div
              className={`relative rounded-lg shadow-md overflow-hidden mb-6 transition-transform duration-300 hover:scale-105 cursor-pointer ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
          >
              <div
                  className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${isRevealed ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
              >
                  <div className={`relative w-20 h-20`}>
                      <div className={`absolute bottom-0 w-full h-3/4`} ></div>
                      <div className={`absolute top-0 w-full h-1/4`}></div>
                      {/* Contenedor adicional para el icono */}
                      <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-5xl`}>
                        <div className="jump-animation">
                            <FontAwesomeIcon icon={faGift} size="5x" color={iconColor}/>
                        </div>
                      </div>
                  </div>
              </div>
              <div className={`p-6 flex flex-col items-center ${isRevealed ? 'opacity-100' : 'opacity-0 pointer-events-none'} transition-opacity duration-300`}>
                  <div className="relative overflow-hidden px-4">
                      <img src={imageUrl} alt={title} className="w-full h-56 object-contain mt-8" />
                  </div>
                  <h3 className={`text-xl font-semibold mb-2 text-left ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                      <FormattedMessage id={`projectCard.title.${title}`} defaultMessage={title} />
                  </h3>
                  <p className={`mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                      <FormattedMessage id={`projectCard.description.${title}`} defaultMessage={description} />
                  </p>
                  <div className="mb-4 w-full">
                      <div className="flex space-x-4">
                          <a href={projectUrl} target="_blank" rel="noopener noreferrer" className={`py-2 px-4 rounded-md hover:bg-primary-700 transition-colors duration-200 font-medium ${isDarkMode ? 'bg-gray-700 text-white hover:bg-gray-600' : 'bg-primary-500 text-white'}`}>
                              <FormattedMessage id="projectCard.view" defaultMessage="View Project" />
                          </a>
                          <a href={githubUrl} target="_blank" rel="noopener noreferrer" className={`hover:text-primary-500 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                              <FaGithub size={24} />
                          </a>
                      </div>
                      <a href={projectUrl} target="_blank" rel="noopener noreferrer" className={`text-right block ${isDarkMode ? 'text-gray-400 hover:text-gray-200' : 'text-gray-500 hover:text-primary-500'}`}>
                          {projectUrl}
                      </a>
                  </div>
                  <div className="overflow-hidden relative w-full">
                      <div
                          ref={carouselRef}
                          className="flex w-max transition-transform duration-500 ease-in-out"
                          style={{
                              transform: `translateX(-${currentIndex * itemWidth}%)`,
                              width: `${extendedTechnologies.length * itemWidth}%`,
                          }}
                      >
                          {extendedTechnologies.map((tech, index) => (
                              <div
                                  key={index}
                                  className={`flex-shrink-0 text-center rounded-md py-1 px-2 mr-2 flex items-center gap-2 w-1/4 ${isDarkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-200 text-gray-700'}`}
                              >
                                  {getIcon(tech)}
                                  {tech}
                              </div>
                          ))}
                      </div>
                  </div>
              </div>
          </div>
        </>
    );
};

export default ProjectCard;