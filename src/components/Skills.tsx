'use client';
import React, { useState } from 'react';
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
    FaGithub,
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
    SiGooglecolab,
    SiJupyter,
    SiTensorflow,
    SiPytorch,
    SiCplusplus,
    SiPostgresql,
    SiGoogle,
} from 'react-icons/si';
import { MdOutlineSettingsInputSvideo } from "react-icons/md";
import { useTheme } from '@/ThemeContext';
import { FormattedMessage, useIntl } from 'react-intl';

const Skills: React.FC = () => {
    const { isDarkMode } = useTheme();
    const intl = useIntl();
    const [activeCategory, setActiveCategory] = useState<number | 'all'>('all');

    const skillsData = {
        title: 'Skills',
        skills: [
            {
                category: 'Web Development Skills',
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
                category: 'Data Analysis and Machine Learning Skills',
                items: [
                    'Python (Pandas, NumPy, Matplotlib, Seaborn)',
                    'Google Colab',
                    'Jupyter Notebooks',
                    'Machine Learning (TensorFlow, Keras, Scikit-learn, PyTorch)',
                ],
            },
            {
                category: 'Other Technical Skills',
                items: [
                    'Java',
                    'C++',
                ],
            },
        ],
    };

    // Color definitions for each skill (color when hovered, and its soft light/dark background)
    const getSkillStyle = (skill: string) => {
        const styles: Record<string, { icon: React.ReactNode; color: string; bgLight: string; bgDark: string }> = {
            'HTML5': { icon: <FaHtml5 />, color: '#E34F26', bgLight: 'hover:bg-[#E34F26]/10', bgDark: 'hover:bg-[#E34F26]/20' },
            'CSS3': { icon: <FaCss3 />, color: '#1572B6', bgLight: 'hover:bg-[#1572B6]/10', bgDark: 'hover:bg-[#1572B6]/20' },
            'JavaScript (ES6+)': { icon: <FaJs />, color: '#F7DF1E', bgLight: 'hover:bg-[#F7DF1E]/10', bgDark: 'hover:bg-[#F7DF1E]/20' },
            'React.js': { icon: <FaReact />, color: '#61DAFB', bgLight: 'hover:bg-[#61DAFB]/10', bgDark: 'hover:bg-[#61DAFB]/20' },
            'Next.js': { icon: <SiNextdotjs />, color: isDarkMode ? '#FFFFFF' : '#000000', bgLight: 'hover:bg-black/5', bgDark: 'hover:bg-white/10' },
            'Node.js': { icon: <FaNodeJs />, color: '#339933', bgLight: 'hover:bg-[#339933]/10', bgDark: 'hover:bg-[#339933]/20' },
            'Express.js': { icon: <SiExpress />, color: isDarkMode ? '#FFFFFF' : '#000000', bgLight: 'hover:bg-black/5', bgDark: 'hover:bg-white/10' },
            'REST APIs': { icon: <FaServer />, color: '#009688', bgLight: 'hover:bg-[#009688]/10', bgDark: 'hover:bg-[#009688]/20' },
            'PostgreSQL': { icon: <SiPostgresql />, color: '#4169E1', bgLight: 'hover:bg-[#4169E1]/10', bgDark: 'hover:bg-[#4169E1]/20' },
            'SQL': { icon: <FaDatabase />, color: '#00758F', bgLight: 'hover:bg-[#00758F]/10', bgDark: 'hover:bg-[#00758F]/20' },
            'Git': { icon: <FaGitAlt />, color: '#F05032', bgLight: 'hover:bg-[#F05032]/10', bgDark: 'hover:bg-[#F05032]/20' },
            'GitHub': { icon: <FaGithub />, color: isDarkMode ? '#FFFFFF' : '#181717', bgLight: 'hover:bg-[#181717]/10', bgDark: 'hover:bg-white/10' },
            'Netlify': { icon: <SiNetlify />, color: '#00C8C8', bgLight: 'hover:bg-[#00C8C8]/10', bgDark: 'hover:bg-[#00C8C8]/20' },
            'Optimización SEO': { icon: <SiGoogle />, color: '#4285F4', bgLight: 'hover:bg-[#4285F4]/10', bgDark: 'hover:bg-[#4285F4]/20' },
            'Diseño Responsivo': { icon: <FaLaptopCode />, color: '#FF5722', bgLight: 'hover:bg-[#FF5722]/10', bgDark: 'hover:bg-[#FF5722]/20' },
            'Maquetación de landing pages': { icon: <MdOutlineSettingsInputSvideo />, color: '#9C27B0', bgLight: 'hover:bg-[#9C27B0]/10', bgDark: 'hover:bg-[#9C27B0]/20' },
            'Single Pages Applications': { icon: <FaGlobe />, color: '#3F51B5', bgLight: 'hover:bg-[#3F51B5]/10', bgDark: 'hover:bg-[#3F51B5]/20' },
            'Python (Pandas, NumPy, Matplotlib, Seaborn)': { icon: <FaPython />, color: '#3776AB', bgLight: 'hover:bg-[#3776AB]/10', bgDark: 'hover:bg-[#3776AB]/20' },
            'Google Colab': { icon: <SiGooglecolab />, color: '#F9AB00', bgLight: 'hover:bg-[#F9AB00]/10', bgDark: 'hover:bg-[#F9AB00]/20' },
            'Jupyter Notebooks': { icon: <SiJupyter />, color: '#F37626', bgLight: 'hover:bg-[#F37626]/10', bgDark: 'hover:bg-[#F37626]/20' },
            'Machine Learning (TensorFlow, Keras, Scikit-learn, PyTorch)': { icon: <SiTensorflow />, color: '#FF6F00', bgLight: 'hover:bg-[#FF6F00]/10', bgDark: 'hover:bg-[#FF6F00]/20' },
            'Java': { icon: <FaJava />, color: '#007396', bgLight: 'hover:bg-[#007396]/10', bgDark: 'hover:bg-[#007396]/20' },
            'C++': { icon: <SiCplusplus />, color: '#00599C', bgLight: 'hover:bg-[#00599C]/10', bgDark: 'hover:bg-[#00599C]/20' },
        };

        return styles[skill] || { icon: <MdOutlineSettingsInputSvideo />, color: '#4A5568', bgLight: 'hover:bg-gray-100', bgDark: 'hover:bg-gray-800' };
    };

    // Filter skills based on tab selection
    const filteredSkills = activeCategory === 'all'
        ? skillsData.skills
        : [skillsData.skills[activeCategory]];

    return (
        <section id="skills" className="my-16 py-8 relative">
            <div className="max-w-6xl mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className={`text-4xl md:text-5xl font-bold tracking-tight mb-2 transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                        <FormattedMessage id="skills.title" defaultMessage={skillsData.title} />
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto rounded-full"></div>
                </div>

                {/* Category Selector Tabs */}
                <div className="flex flex-wrap justify-center gap-3 mb-10">
                    <button
                        onClick={() => setActiveCategory('all')}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 transform active:scale-95 ${
                            activeCategory === 'all'
                                ? 'bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-lg shadow-blue-500/20'
                                : isDarkMode
                                    ? 'bg-gray-800/80 text-gray-300 hover:bg-gray-700/80 hover:text-white border border-gray-700/50'
                                    : 'bg-white/80 text-gray-600 hover:bg-gray-100 hover:text-gray-900 border border-gray-200 shadow-sm'
                        }`}
                    >
                        {intl.formatMessage({ id: 'skills.all', defaultMessage: 'All Skills' })}
                    </button>
                    {skillsData.skills.map((skillGroup, index) => (
                        <button
                            key={index}
                            onClick={() => setActiveCategory(index)}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 transform active:scale-95 ${
                                activeCategory === index
                                    ? 'bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-lg shadow-blue-500/20'
                                    : isDarkMode
                                        ? 'bg-gray-800/80 text-gray-300 hover:bg-gray-700/80 hover:text-white border border-gray-700/50'
                                        : 'bg-white/80 text-gray-600 hover:bg-gray-100 hover:text-gray-900 border border-gray-200 shadow-sm'
                            }`}
                        >
                            <FormattedMessage id={`skills.category.${index}`} defaultMessage={skillGroup.category} />
                        </button>
                    ))}
                </div>

                {/* Grid of Categories */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredSkills.map((skillGroup, index) => {
                        const originalIndex = activeCategory === 'all' ? index : activeCategory;
                        return (
                            <div
                                key={originalIndex}
                                className={`rounded-2xl p-6 transition-all duration-500 border backdrop-blur-md transform hover:-translate-y-1 ${
                                    isDarkMode
                                        ? 'bg-gray-900/60 border-gray-800 hover:border-gray-700 hover:shadow-2xl hover:shadow-indigo-500/5'
                                        : 'bg-white/70 border-gray-200/80 hover:border-gray-300 hover:shadow-xl hover:shadow-indigo-500/5'
                                }`}
                            >
                                <h3 className={`text-xl font-bold mb-5 tracking-wide ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                                    <FormattedMessage id={`skills.category.${originalIndex}`} defaultMessage={skillGroup.category} />
                                </h3>
                                <div className="flex flex-col gap-3">
                                    {skillGroup.items.map((item, itemIndex) => {
                                        const { icon, color, bgLight, bgDark } = getSkillStyle(item);
                                        return (
                                            <div
                                                key={itemIndex}
                                                style={{ '--skill-brand-color': color } as React.CSSProperties}
                                                className={`group flex items-center gap-3 py-3 px-4 rounded-xl border transition-all duration-300 cursor-default ${
                                                    isDarkMode
                                                        ? `bg-gray-800/30 border-gray-800/80 text-gray-300 ${bgDark} hover:border-[var(--skill-brand-color)]/30`
                                                        : `bg-gray-50/50 border-gray-100 text-gray-700 ${bgLight} hover:border-[var(--skill-brand-color)]/20`
                                                }`}
                                            >
                                                <div
                                                    className="text-2xl transition-all duration-300 transform group-hover:scale-125 group-hover:rotate-6 text-gray-400 group-hover:text-[var(--skill-brand-color)] filter group-hover:drop-shadow-[0_0_8px_var(--skill-brand-color)]"
                                                >
                                                    {icon}
                                                </div>
                                                <span className="font-medium text-sm transition-colors duration-300 group-hover:text-black dark:group-hover:text-white">
                                                    {item}
                                                </span>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Skills;