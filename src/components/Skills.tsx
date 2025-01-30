'use client';
import React from 'react';
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

const Skills: React.FC = () => {
  const { isDarkMode } = useTheme();

    const skillsData = {
        title: 'Habilidades',
        skills: [
            {
                category: 'Habilidades de Desarrollo Web',
                items: [
                    'HTML5',
                    'CSS3',
                    'JavaScript (ES6+)',
                    'React.js',
                    'Next.js',
                    'Node.js',
                    'Express.js',
                    'REST APIs',
                    'PostgreSQL',
                    'SQL',
                    'Git',
                    'GitHub',
                    'Netlify',
                    'Optimización SEO',
                    'Diseño Responsivo',
                    'Maquetación de landing pages',
                    'Single Pages Applications',
                ],
            },
            {
                category: 'Habilidades de Análisis de Datos y Machine Learning',
                items: [
                    'Python (Pandas, NumPy, Matplotlib, Seaborn)',
                    'Google Colab',
                    'Jupyter Notebooks',
                    'Machine Learning (TensorFlow, Keras, Scikit-learn, PyTorch)',
                ],
            },
            {
                category: 'Otras Habilidades Técnicas',
                items: [
                    'Java',
                    'C++',
                ],
            },
        ],
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
                 case 'Maquetación de landing pages':
                case 'Single Pages Applications':
                return <MdOutlineSettingsInputSvideo />;
             default:
                return null;
       }
   };

    return (
      <section id="skills" className="my-8 animate-fade-in">
        <h2 className={`text-2xl font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{skillsData.title}</h2>
        {skillsData.skills?.map((skillGroup, index) => (
          <div key={index} className="mb-6">
            <h3 className={`text-xl font-medium mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{skillGroup.category}</h3>
            <ul className="flex flex-wrap gap-2">
                {skillGroup.items.map((item, itemIndex) => (
                  <li key={itemIndex} className={`rounded-md py-1 px-2 flex items-center gap-2 transition-colors duration-200 ${isDarkMode ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}>
                       {getIcon(item)}
                      {item}
                   </li>
                  ))}
            </ul>
          </div>
        ))}
      </section>
    );
};

export default Skills;