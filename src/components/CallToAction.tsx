'use client';
import React from 'react';
import  ResponsiveDesign from './ResponsiveDesign';
import BusinessGrowth from './BusinessGrowth';
import Automation from './Automation';
import { useTheme } from '@/ThemeContext';
import { FormattedMessage } from 'react-intl';

const CallToAction: React.FC = () => {
    const { isDarkMode } = useTheme();

    return (
        <section className="my-20 relative">
            <div className="max-w-4xl mx-auto px-4">
                <div
                    className={`relative overflow-hidden rounded-3xl p-8 md:p-12 border backdrop-blur-md transition-all duration-500 shadow-2xl ${
                        isDarkMode
                            ? 'bg-gradient-to-br from-gray-900/90 to-indigo-950/40 border-indigo-500/10 hover:border-indigo-500/20'
                            : 'bg-gradient-to-br from-white/90 to-blue-50/40 border-gray-200/80 hover:border-blue-500/20'
                    }`}
                >
                    {/* Ambient Glow Effects */}
                    <div className="absolute -left-16 -top-16 w-48 h-48 bg-blue-500/10 dark:bg-blue-500/20 rounded-full blur-3xl pointer-events-none"></div>
                    <div className="absolute -right-16 -bottom-16 w-48 h-48 bg-indigo-500/10 dark:bg-indigo-500/20 rounded-full blur-3xl pointer-events-none"></div>

                    <div className="relative z-10 text-center">
                        <h2 className={`text-3xl md:text-4xl font-extrabold tracking-tight mb-4 transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                            <FormattedMessage id="callToAction.title" defaultMessage="Ready to Transform Your Digital Presence" />
                        </h2>
                        <p className={`text-base md:text-lg mb-10 leading-relaxed max-w-2xl mx-auto transition-colors duration-300 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                            <FormattedMessage id="callToAction.description" defaultMessage="Boost your company's growth with a web developer that offers you solid solutions, with impeccable designs, and a strategic vision of data analysis. Be part of the digital transformation, lead the market with a web presence that makes a difference, explore my work." />
                        </p>

                        {/* Feature Cards Grid */}
                        <div className="flex flex-col sm:flex-row justify-center items-stretch gap-6 mb-10 max-w-3xl mx-auto">
                            <ResponsiveDesign />
                            <BusinessGrowth />
                            <Automation />
                        </div>

                        {/* CTA Button */}
                        <a
                            href="#projects"
                            className="inline-flex items-center justify-center bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-bold py-3.5 px-8 rounded-xl shadow-lg shadow-blue-500/25 hover:shadow-blue-500/35 hover:scale-105 active:scale-95 transition-all duration-300 transform"
                        >
                            <FormattedMessage id="callToAction.button" defaultMessage="Explore My Work" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CallToAction;