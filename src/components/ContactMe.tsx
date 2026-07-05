'use client';
import React, { useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { FaGithub, FaPaperPlane } from 'react-icons/fa';
import { RiWhatsappFill } from 'react-icons/ri';
import { AiOutlineMail } from 'react-icons/ai';
import { useTheme } from '@/ThemeContext';
import { FormattedMessage, useIntl } from 'react-intl';

/* ── Types ── */
type SendStatus = 'idle' | 'loading' | 'success' | 'error';

/* ── Contact card data ── */
const CONTACT_LINKS = [
    {
        id: 'email',
        icon: AiOutlineMail,
        label: 'Email',
        value: 'jhernadezcorrea@gmail.com',
        href: 'mailto:jhernadezcorrea@gmail.com',
        colorDark: 'text-indigo-400 bg-indigo-400/10 border-indigo-400/20',
        colorLight: 'text-indigo-600 bg-indigo-50 border-indigo-200',
    },
    {
        id: 'whatsapp',
        icon: RiWhatsappFill,
        label: 'WhatsApp',
        value: '+57 310 578 7397',
        href: 'https://wa.me/+573105787397',
        colorDark: 'text-green-400 bg-green-400/10 border-green-400/20',
        colorLight: 'text-green-600 bg-green-50 border-green-200',
    },
    {
        id: 'github',
        icon: FaGithub,
        label: 'GitHub',
        value: 'jonathanDavid1',
        href: 'https://github.com/jonathanDavid1',
        colorDark: 'text-gray-300 bg-slate-700/50 border-slate-600/30',
        colorLight: 'text-gray-700 bg-gray-100 border-gray-200',
    },
];

/* ── Component ── */
const ContactMe: React.FC = () => {
    const form = useRef<HTMLFormElement>(null);
    const [status, setStatus] = useState<SendStatus>('idle');
    const { isDarkMode } = useTheme();
    const intl = useIntl();

    /* Auto-dismiss success banner after 5s */
    useEffect(() => {
        if (status !== 'success') return;
        const timer = setTimeout(() => setStatus('idle'), 5000);
        return () => clearTimeout(timer);
    }, [status]);

    const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!form.current) return;

        setStatus('loading');
        try {
            await emailjs.sendForm(
                'service_a3rtba8',
                'template_digiwle',
                form.current,
                'LuCMKTOFR-6by99PI'
            );
            setStatus('success');
            form.current.reset();
        } catch {
            setStatus('error');
        }
    };

    /* Shared input class */
    const inputClass = `w-full px-4 py-3 rounded-xl border text-sm transition-all duration-200 outline-none
        focus:ring-2 focus:ring-indigo-500/40 focus:border-indigo-500
        ${isDarkMode
            ? 'bg-slate-800/60 border-slate-700 text-white placeholder-slate-500'
            : 'bg-white border-gray-200 text-gray-800 placeholder-gray-400'
        }`;

    return (
        <section id="contact" className="relative py-20 overflow-hidden">

            {/* ── Ambient background blob ── */}
            <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
                <div className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full blur-3xl opacity-[0.08] ${isDarkMode ? 'bg-indigo-600' : 'bg-indigo-300'}`} />
            </div>

            <div className="container mx-auto px-6 relative z-10">

                {/* ── Section header ── */}
                <div className="text-center mb-14">
                    <h2 className={`text-4xl font-extrabold mb-3 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                        <FormattedMessage id="contactMe.title" defaultMessage="Contact Me" />
                    </h2>
                    <p className={`text-base max-w-md mx-auto ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                        <FormattedMessage
                            id="contactMe.description"
                            defaultMessage="If you have any project in mind or any questions, do not hesitate to contact me. Let's talk!"
                        />
                    </p>
                </div>

                {/* ── Two-column grid ── */}
                <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-start">

                    {/* ── Left: contact info ── */}
                    <div className="flex flex-col gap-6">
                        <p className={`text-sm font-semibold uppercase tracking-widest ${isDarkMode ? 'text-indigo-400' : 'text-indigo-600'}`}>
                            <FormattedMessage id="contactMe.directContact" defaultMessage="Or reach me directly" />
                        </p>

                        {CONTACT_LINKS.map(({ id, icon: Icon, label, value, href, colorDark, colorLight }) => (
                            <a
                                key={id}
                                href={href}
                                target={id !== 'email' ? '_blank' : undefined}
                                rel="noopener noreferrer"
                                className={`group flex items-center gap-4 p-4 rounded-2xl border transition-all duration-200 hover:scale-[1.02] hover:-translate-y-0.5 hover:shadow-md ${
                                    isDarkMode
                                        ? 'bg-slate-800/50 border-slate-700/60 hover:border-indigo-500/40'
                                        : 'bg-white border-gray-200 hover:border-indigo-300 shadow-sm'
                                }`}
                            >
                                {/* Icon badge */}
                                <div className={`flex-shrink-0 w-11 h-11 rounded-xl border flex items-center justify-center ${isDarkMode ? colorDark : colorLight}`}>
                                    <Icon size={20} />
                                </div>
                                {/* Text */}
                                <div className="min-w-0">
                                    <p className={`text-xs font-medium mb-0.5 ${isDarkMode ? 'text-slate-400' : 'text-gray-400'}`}>
                                        {label}
                                    </p>
                                    <p className={`text-sm font-semibold truncate ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
                                        {value}
                                    </p>
                                </div>
                                {/* Arrow */}
                                <svg
                                    className={`ml-auto w-4 h-4 flex-shrink-0 transition-transform duration-200 group-hover:translate-x-1 ${isDarkMode ? 'text-slate-500' : 'text-gray-400'}`}
                                    fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </a>
                        ))}
                    </div>

                    {/* ── Right: form ── */}
                    <div className={`rounded-3xl p-7 border ${isDarkMode ? 'bg-slate-800/40 border-slate-700/50 backdrop-blur-sm' : 'bg-white border-gray-200 shadow-sm'}`}>

                        {/* Success banner */}
                        {status === 'success' && (
                            <div className="flex flex-col items-center justify-center gap-2 py-12 text-center">
                                <div className="w-16 h-16 rounded-full bg-green-500/15 flex items-center justify-center mb-2">
                                    <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <h3 className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                                    <FormattedMessage id="contactMe.successTitle" defaultMessage="Message sent!" />
                                </h3>
                                <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                                    <FormattedMessage id="contactMe.successSubtitle" defaultMessage="I'll get back to you shortly." />
                                </p>
                            </div>
                        )}

                        {/* Error banner */}
                        {status === 'error' && (
                            <div className={`flex items-center gap-3 mb-5 px-4 py-3 rounded-xl text-sm ${isDarkMode ? 'bg-red-500/10 border border-red-500/30 text-red-400' : 'bg-red-50 border border-red-200 text-red-600'}`}>
                                <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <FormattedMessage id="contactMe.error" defaultMessage="Something went wrong. Please try again." />
                            </div>
                        )}

                        {/* Form (hidden during success) */}
                        {status !== 'success' && (
                            <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-5">

                                {/* Name */}
                                <div>
                                    <label htmlFor="contact-name" className={`block text-sm font-medium mb-1.5 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                                        <FormattedMessage id="contactMe.name" defaultMessage="Name" />
                                    </label>
                                    <input
                                        type="text"
                                        name="user_name"
                                        id="contact-name"
                                        className={inputClass}
                                        placeholder={intl.formatMessage({ id: 'contactMe.namePlaceholder', defaultMessage: 'Your Name' })}
                                        required
                                    />
                                </div>

                                {/* Email */}
                                <div>
                                    <label htmlFor="contact-email" className={`block text-sm font-medium mb-1.5 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                                        <FormattedMessage id="contactMe.email" defaultMessage="Email" />
                                    </label>
                                    <input
                                        type="email"
                                        name="user_email"
                                        id="contact-email"
                                        className={inputClass}
                                        placeholder={intl.formatMessage({ id: 'contactMe.emailPlaceholder', defaultMessage: 'Your Email' })}
                                        required
                                    />
                                </div>

                                {/* Message */}
                                <div>
                                    <label htmlFor="contact-message" className={`block text-sm font-medium mb-1.5 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                                        <FormattedMessage id="contactMe.message" defaultMessage="Message" />
                                    </label>
                                    <textarea
                                        name="message"
                                        id="contact-message"
                                        rows={5}
                                        className={`${inputClass} resize-none`}
                                        placeholder={intl.formatMessage({ id: 'contactMe.messagePlaceholder', defaultMessage: 'Your Message' })}
                                        required
                                    />
                                </div>

                                {/* Submit button */}
                                <button
                                    type="submit"
                                    disabled={status === 'loading'}
                                    className="inline-flex items-center justify-center gap-2 w-full py-3 px-6 rounded-xl font-semibold text-white bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 shadow-lg shadow-indigo-500/25 dark:shadow-indigo-800/30 transition-all duration-200 hover:scale-[1.02] hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:translate-y-0 focus:outline-none"
                                >
                                    {status === 'loading' ? (
                                        <>
                                            {/* Spinner */}
                                            <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                                            </svg>
                                            <FormattedMessage id="contactMe.sending" defaultMessage="Sending..." />
                                        </>
                                    ) : (
                                        <>
                                            <FaPaperPlane size={14} />
                                            <FormattedMessage id="contactMe.send" defaultMessage="Send Message" />
                                        </>
                                    )}
                                </button>

                            </form>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactMe;