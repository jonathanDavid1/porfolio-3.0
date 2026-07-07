'use client';
import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
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
    FaServer,
    FaLaptopCode,
    FaGlobe,
} from 'react-icons/fa';
import {
    SiNextdotjs,
    SiTailwindcss,
    SiTypescript,
    SiExpress,
    SiNetlify,
    SiGoogle,
    SiMongodb,
    SiStrapi,
    SiRedux,
    SiPandas,
    SiNumpy,
    SiPostgresql,
} from 'react-icons/si';
import { MdOutlineSettingsInputSvideo } from "react-icons/md";
import { useTheme } from '@/ThemeContext';
import { FormattedMessage } from 'react-intl';

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
}) => {
    const { isDarkMode } = useTheme();

    const getIcon = (tech: string) => {
        const cleanTech = tech.trim().toLowerCase();
        switch (cleanTech) {
            case 'html5':
                return <FaHtml5 className="text-[#E34F26]" />;
            case 'css3':
                return <FaCss3 className="text-[#1572B6]" />;
            case 'javascript':
            case 'javascript (es6+)':
                return <FaJs className="text-[#F7DF1E]" />;
            case 'react':
            case 'react.js':
                return <FaReact className="text-[#61DAFB]" />;
            case 'next.js':
                return <SiNextdotjs className={isDarkMode ? 'text-white' : 'text-black'} />;
            case 'node.js':
            case 'node js':
                return <FaNodeJs className="text-[#339933]" />;
            case 'express':
            case 'express.js':
                return <SiExpress className={isDarkMode ? 'text-white' : 'text-black'} />;
            case 'python':
                return <FaPython className="text-[#3776AB]" />;
            case 'git':
                return <FaGitAlt className="text-[#F05032]" />;
            case 'docker':
                return <FaDocker className="text-[#2496ED]" />;
            case 'java':
                return <FaJava className="text-[#007396]" />;
            case 'typescript':
                return <SiTypescript className="text-[#3178C6]" />;
            case 'postgresql':
                return <SiPostgresql className="text-[#4169E1]" />;
            case 'sql':
            case 'database':
                return <FaDatabase className="text-[#00758F]" />;
            case 'seo':
            case 'optimización seo':
                return <SiGoogle className="text-[#4285F4]" />;
            case 'diseño responsivo':
                return <FaLaptopCode className="text-[#FF5722]" />;
            case 'netlify':
                return <SiNetlify className="text-[#00C8C8]" />;
            case 'mongodb':
                return <SiMongodb className="text-[#47A248]" />;
            case 'strapi':
                return <SiStrapi className="text-[#4945FF]" />;
            case 'tailwind':
            case 'tailwind css':
                return <SiTailwindcss className="text-[#06B6D4]" />;
            case 'api':
            case 'rest api':
            case 'rest apis':
                return <FaServer className="text-[#009688]" />;
            case 'zustang':
            case 'zustand':
                return <SiRedux className="text-[#764ABC]" />;
            case 'pandas':
                return <SiPandas className="text-[#150458]" />;
            case 'numpy':
                return <SiNumpy className="text-[#013243]" />;
            default:
                return <MdOutlineSettingsInputSvideo className="text-gray-400" />;
        }
    };

    return (
        <div
            className={`group flex flex-col h-full rounded-2xl border transition-all duration-500 overflow-hidden ${
                isDarkMode
                    ? 'bg-gray-900/60 border-gray-800 hover:border-gray-700/80 hover:shadow-2xl hover:shadow-indigo-500/5'
                    : 'bg-white/70 border-gray-200/80 hover:border-gray-300/80 hover:shadow-xl hover:shadow-indigo-500/5'
            }`}
        >
            {/* Project Image & Overlay */}
            <div className="relative h-52 w-full overflow-hidden bg-gray-100 dark:bg-gray-900/30 border-b border-gray-200/30 dark:border-gray-800/30">
                <img
                    src={imageUrl}
                    alt={title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
                
                {/* Actions Overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 backdrop-blur-sm">
                    <a
                        href={projectUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-4 py-2 rounded-xl text-sm font-semibold shadow-lg shadow-blue-500/20 hover:scale-105 transition-transform duration-200"
                    >
                        <FaExternalLinkAlt size={14} />
                        <FormattedMessage id="projectCard.view" defaultMessage="View Site" />
                    </a>
                    <a
                        href={githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center bg-gray-800 text-white hover:bg-gray-700 p-2.5 rounded-xl border border-gray-700 hover:scale-105 transition-transform duration-200"
                        title="GitHub Repository"
                    >
                        <FaGithub size={18} />
                    </a>
                </div>
            </div>

            {/* Project Details */}
            <div className="p-6 flex flex-col flex-grow">
                <h3 className={`text-xl font-bold mb-3 transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    <FormattedMessage id={`projectCard.title.${title}`} defaultMessage={title} />
                </h3>
                <p className={`text-sm leading-relaxed mb-6 flex-grow ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    <FormattedMessage id={`projectCard.description.${title}`} defaultMessage={description} />
                </p>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-2 mt-auto">
                    {technologies.map((tech, index) => (
                        <div
                            key={index}
                            className={`flex items-center gap-1.5 py-1 px-2.5 rounded-full text-xs font-semibold border transition-colors duration-300 ${
                                isDarkMode
                                    ? 'bg-gray-800/40 border-gray-800/60 text-gray-300 group-hover:border-gray-700/60'
                                    : 'bg-gray-50 border-gray-100 text-gray-600 group-hover:border-gray-200'
                            }`}
                        >
                            <span className="text-sm flex items-center justify-center">
                                {getIcon(tech)}
                            </span>
                            <span>{tech}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;