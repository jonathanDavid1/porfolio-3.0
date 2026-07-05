'use client';
import React, { useState, useEffect, useMemo } from 'react';
import { useTheme } from '@/ThemeContext';
import { FormattedMessage, useIntl } from 'react-intl';
import { FaGithub } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';
import { RiWhatsappFill } from 'react-icons/ri';

const Intro: React.FC = () => {
  const { isDarkMode } = useTheme();
  const intl = useIntl();
  const currentLocale = intl.locale;

  const cvPdfUrl = currentLocale === 'es'
    ? '/cv dev jonathan SD.pdf'
    : '/cv dev jonathan ED.pdf';

  // Roles for typewriter (locale-aware)
  const ROLES = useMemo(() => (
    currentLocale === 'es'
      ? ['Full Stack Developer', 'Analista de Datos']
      : ['Full Stack Developer', 'Data Analyst']
  ), [currentLocale]);

  // ── Typewriter state ──
  const [displayed, setDisplayed] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = ROLES[roleIndex];

    let delay: number;
    if (!isDeleting && charIndex === currentRole.length) {
      delay = 1800; // pause at end before deleting
    } else if (isDeleting) {
      delay = 40;   // fast delete
    } else {
      delay = 80;   // typing speed
    }

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (charIndex < currentRole.length) {
          setDisplayed(currentRole.slice(0, charIndex + 1));
          setCharIndex((c) => c + 1);
        } else {
          // Pause ended — start deleting
          setIsDeleting(true);
        }
      } else {
        if (charIndex > 0) {
          setDisplayed(currentRole.slice(0, charIndex - 1));
          setCharIndex((c) => c - 1);
        } else {
          // Done deleting — move to next role
          setIsDeleting(false);
          setRoleIndex((r) => (r + 1) % ROLES.length);
        }
      }
    }, delay);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, roleIndex, ROLES]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* ── Background ambient blobs ── */}
      <div className="absolute inset-0 pointer-events-none select-none" aria-hidden="true">
        <div
          className={`absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full blur-3xl opacity-[0.18] ${
            isDarkMode ? 'bg-indigo-600' : 'bg-indigo-300'
          }`}
        />
        <div
          className={`absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full blur-3xl opacity-[0.12] ${
            isDarkMode ? 'bg-purple-700' : 'bg-purple-300'
          }`}
        />
        <div
          className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full blur-3xl opacity-[0.06] ${
            isDarkMode ? 'bg-pink-600' : 'bg-pink-200'
          }`}
        />
      </div>

      {/* ── Main content ── */}
      <div className="container mx-auto px-6 pt-24 pb-16 flex flex-col-reverse md:flex-row items-center justify-between gap-12 md:gap-8 relative z-10">

        {/* ── Text block ── */}
        <div className="flex-1 text-center md:text-left max-w-xl">

          {/* Greeting badge */}
          <div className={`intro-item intro-delay-1 inline-flex items-center gap-2 mb-5 px-4 py-1.5 rounded-full text-sm font-medium border ${
            isDarkMode
              ? 'bg-slate-800/80 border-slate-700 text-slate-300'
              : 'bg-indigo-50 border-indigo-200 text-indigo-700'
          }`}>
            <span>👋</span>
            <span><FormattedMessage id="intro.greeting" defaultMessage="Hello, I'm" /></span>
          </div>

          {/* Name */}
          <h1 className="intro-item intro-delay-2 text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 dark:from-blue-400 dark:via-indigo-400 dark:to-purple-400 bg-clip-text text-transparent">
            Jonathan David<br />Hernández
          </h1>

          {/* Typewriter role */}
          <div className="intro-item intro-delay-3 flex items-center justify-center md:justify-start gap-1 text-xl sm:text-2xl font-semibold mb-6 min-h-[2rem]">
            <span className={isDarkMode ? 'text-blue-400' : 'text-indigo-600'}>
              {displayed}
            </span>
            <span className={`w-[2px] h-6 rounded-full animate-blink ${isDarkMode ? 'bg-blue-400' : 'bg-indigo-600'}`} />
          </div>

          {/* Description */}
          <p className={`intro-item intro-delay-4 text-base md:text-lg leading-relaxed mb-8 ${
            isDarkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            <FormattedMessage id="intro.description" defaultMessage="Full Stack Developer & Data Analyst passionate about building exceptional web experiences." />
          </p>

          {/* CTA buttons */}
          <div className="intro-item intro-delay-5 flex flex-wrap items-center justify-center md:justify-start gap-4 mb-8">
            {/* Primary: Download CV */}
            <a
              href={cvPdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 shadow-lg shadow-indigo-500/25 dark:shadow-indigo-800/40 transition-all duration-200 hover:scale-105 hover:-translate-y-0.5 focus:outline-none"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              <FormattedMessage id="intro.downloadCv" defaultMessage="Download CV" />
            </a>

            {/* Secondary: View Projects */}
            <a
              href="#projects"
              className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold border-2 transition-all duration-200 hover:scale-105 hover:-translate-y-0.5 focus:outline-none ${
                isDarkMode
                  ? 'border-slate-600 text-gray-300 hover:border-indigo-400 hover:text-indigo-400 hover:bg-indigo-400/5'
                  : 'border-gray-300 text-gray-700 hover:border-indigo-500 hover:text-indigo-600 hover:bg-indigo-50'
              }`}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
              <FormattedMessage id="intro.viewProjects" defaultMessage="View Projects" />
            </a>
          </div>

          {/* Social icons */}
          <div className="intro-item intro-delay-6 flex items-center justify-center md:justify-start gap-5">
            <a
              href="mailto:jhernadezcorrea@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Email"
              className={`p-2.5 rounded-lg border transition-all duration-200 hover:scale-110 hover:-translate-y-0.5 ${
                isDarkMode
                  ? 'border-slate-700 text-gray-400 hover:border-indigo-400 hover:text-indigo-400 hover:bg-indigo-400/10'
                  : 'border-gray-200 text-gray-500 hover:border-indigo-400 hover:text-indigo-600 hover:bg-indigo-50'
              }`}
            >
              <AiOutlineMail size={20} />
            </a>
            <a
              href="https://github.com/jonathanDavid1"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className={`p-2.5 rounded-lg border transition-all duration-200 hover:scale-110 hover:-translate-y-0.5 ${
                isDarkMode
                  ? 'border-slate-700 text-gray-400 hover:border-indigo-400 hover:text-indigo-400 hover:bg-indigo-400/10'
                  : 'border-gray-200 text-gray-500 hover:border-indigo-400 hover:text-indigo-600 hover:bg-indigo-50'
              }`}
            >
              <FaGithub size={20} />
            </a>
            <a
              href="https://wa.me/+573105787397"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className={`p-2.5 rounded-lg border transition-all duration-200 hover:scale-110 hover:-translate-y-0.5 ${
                isDarkMode
                  ? 'border-slate-700 text-gray-400 hover:border-indigo-400 hover:text-indigo-400 hover:bg-indigo-400/10'
                  : 'border-gray-200 text-gray-500 hover:border-indigo-400 hover:text-indigo-600 hover:bg-indigo-50'
              }`}
            >
              <RiWhatsappFill size={20} />
            </a>
          </div>
        </div>

        {/* ── Profile image with animated gradient ring ── */}
        <div className="intro-item intro-delay-img flex-shrink-0 flex items-center justify-center">
          <div className="relative w-52 h-52 sm:w-60 sm:h-60 md:w-72 md:h-72">
            {/* Spinning gradient ring */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 animate-spin-slow" />
            {/* Inner background circle (creates the ring gap) */}
            <div className={`absolute inset-[3px] rounded-full ${isDarkMode ? 'bg-slate-900' : 'bg-white'}`} />
            {/* Profile photo */}
            <img
              src="/profile1.png"
              alt="Jonathan David Hernández"
              className="absolute inset-[6px] rounded-full object-cover w-[calc(100%-12px)] h-[calc(100%-12px)] transition-transform duration-300 hover:scale-[1.03]"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Intro;