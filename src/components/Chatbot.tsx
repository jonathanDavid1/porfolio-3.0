'use client';

import React, { useState, useRef, useEffect } from 'react';
import { useTheme } from '@/ThemeContext';
import { useLanguage } from '../LanguageContext';
import { FaRobot, FaTimes, FaUser, FaPaperPlane } from 'react-icons/fa';

interface Message {
    role: 'user' | 'model';
    text: string;
}

const Chatbot = () => {
    const { isDarkMode } = useTheme();
    const { locale } = useLanguage();
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [pdfBase64, setPdfBase64] = useState<string | null>(null);

    const messagesEndRef = useRef<HTMLDivElement>(null);

    // Actualiza el mensaje inicial dinámicamente si el usuario cambia de idioma
    useEffect(() => {
        setMessages([
            {
                role: 'model',
                text: locale === 'en'
                    ? "Hello! I am Jarvis, Jonathan's AI assistant. 😊 Would you like to know something about his projects, skills, or availability?"
                    : '¡Hola! Soy Jarvis, la IA asistente de Jonathan. 😊 ¿Quieres saber algo sobre sus proyectos, habilidades o disponibilidad?'
            }
        ]);
    }, [locale]);

    // Pre-carga y convierte el PDF solo una vez al abrir o renderizar, preparado para Gemini
    useEffect(() => {
        const loadPdf = async () => {
            try {
                const responsePdf = await fetch('/cv dev jonathan ED.pdf');
                if (!responsePdf.ok) return;
                const blobPdf = await responsePdf.blob();
                const reader = new FileReader();
                reader.onloadend = () => {
                    const base64data = reader.result?.toString().split(',')[1];
                    if (base64data) {
                        setPdfBase64(base64data);
                    }
                };
                reader.readAsDataURL(blobPdf);
            } catch (error) {
                console.error('Error preload pdf:', error);
            }
        };
        loadPdf();
    }, []);

    // Animación fluida para scrollear hacia el mensaje más bajo
    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        if (isOpen) {
            scrollToBottom();
        }
    }, [messages, isOpen]);

    const toggleChat = () => setIsOpen(!isOpen);

    const handleSend = async (e?: React.FormEvent) => {
        e?.preventDefault();
        if (!input.trim() || isLoading) return;

        const userText = input.trim();
        const newMessages: Message[] = [...messages, { role: 'user', text: userText }];
        setMessages(newMessages);
        setInput('');
        setIsLoading(true);

        try {
            const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY || 'Aquí_va_tu_API_KEY';

            // Formatear el historial de chat con la estructura requerida por Gemini
            const geminiHistory: any[] = newMessages.map(msg => ({
                role: msg.role === 'user' ? 'user' : 'model',
                parts: [{ text: msg.text }]
            }));

            // Adjuntamos el PDF siempre en el PRIMER mensaje del usuario (solución a "Only text is supported...")
            // Así Gemini lo leerá durante todo el historial de la conversación.
            if (pdfBase64) {
                const firstUserIndex = geminiHistory.findIndex(m => m.role === 'user');
                if (firstUserIndex !== -1) {
                    geminiHistory[firstUserIndex].parts.unshift({
                        inlineData: {
                            mimeType: 'application/pdf',
                            data: pdfBase64
                        }
                    });
                }
            }

            // Instrucciones del sistema estrictas de SOLO TEXTO según el idioma
            const systemText = locale === 'en'
                ? "You are the virtual assistant embedded in Jonathan David Hernández Correa's portfolio. Jonathan is an outstanding Full Stack Web Developer and Data Analyst. Base your answers strictly on the attached resume (PDF file) provided by the user in this conversation. Give concise, friendly, and professional answers speaking only in English."
                : "Eres el asistente virtual incorporado en el portafolio de Jonathan David Hernández Correa. Jonathan es un Desarrollador Web Full Stack y Analista de Datos destacable. Basarás tus respuestas estrictamente en el currículum (archivo PDF) adjunto que el usuario acaba de enviar. Da respuestas concisas, amables y profesionales hablando solo en español.";

            // Llamada al modelo gemini-2.5-flash
            const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    contents: geminiHistory,
                    // Instrucciones del sistema aceptando únicamente texto
                    systemInstruction: {
                        parts: [{ text: systemText }]
                    }
                })
            });

            const data = await response.json();

            if (data.error) {
                throw new Error(data.error.message || 'Error de red con la API de Googe');
            }

            const modelText = data.candidates[0].content.parts[0].text;
            setMessages(prev => [...prev, { role: 'model', text: modelText }]);

        } catch (error) {
            console.error('Error al invocar a Gemini:', error);
            const errorMsg = locale === 'en'
                ? 'Oops, an error occurred while trying to communicate with the AI. Please try again in a few minutes.'
                : 'Ups, sucedió un error al intentar comunicarme con la IA. Por favor intenta de nuevo en unos minutos.';
            setMessages(prev => [...prev, { role: 'model', text: errorMsg }]);
        } finally {
            setIsLoading(false);
        }
    };

    // Permite enviar texto presionando 'Enter' (y añade saltos de linea con Shift+Enter)
    const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSend();
        }
    };

    return (
        <div className="fixed bottom-24 right-8 z-50 flex flex-col items-end">
            {/* Ventana de Chat Flotante */}
            {isOpen && (
                <div
                    className={`mb-4 w-[340px] sm:w-[380px] h-[500px] flex flex-col rounded-2xl shadow-2xl overflow-hidden transition-all duration-300 transform origin-bottom-right ${isDarkMode ? 'bg-gray-800 border-gray-700 border' : 'bg-white border-gray-200 border'
                        }`}
                >
                    {/* Header Premium */}
                    <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-4 flex justify-between items-center text-white shadow-md z-10">
                        <div className="flex items-center gap-3">
                            <FaRobot size={24} className="animate-pulse" />
                            <h3 className="font-bold text-lg tracking-wide">{locale === 'en' ? 'AI Assistant' : 'Asistente IA'}</h3>
                        </div>
                        <button
                            onClick={toggleChat}
                            className="text-white hover:text-gray-300 transition-colors focus:outline-none"
                            aria-label="Cerrar Chat"
                        >
                            <FaTimes size={20} />
                        </button>
                    </div>

                    {/* Contenedor de Historial de Mensajes */}
                    <div className={`flex-1 overflow-y-auto p-4 space-y-4 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
                        {messages.map((msg, index) => (
                            <div key={index} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                                <div className={`flex gap-2 max-w-[85%] ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>

                                    <div className={`flex-shrink-0 mt-1 h-8 w-8 rounded-full shadow-sm flex items-center justify-center ${msg.role === 'user' ? 'bg-blue-600' : 'bg-indigo-600'}`}>
                                        {msg.role === 'user' ? <FaUser className="text-white text-xs" /> : <FaRobot className="text-white text-xs" />}
                                    </div>

                                    <div className={`p-3 text-sm leading-relaxed ${msg.role === 'user'
                                        ? 'bg-blue-600 text-white rounded-2xl rounded-tr-none shadow-md'
                                        : isDarkMode
                                            ? 'bg-gray-800 text-gray-200 rounded-2xl rounded-tl-none border border-gray-700 shadow-sm'
                                            : 'bg-white text-gray-800 rounded-2xl rounded-tl-none border border-gray-200 shadow-sm'
                                        }`}>
                                        <p className="whitespace-pre-wrap">{msg.text}</p>
                                    </div>

                                </div>
                            </div>
                        ))}

                        {/* Indicador de escritura "Thinking" */}
                        {isLoading && (
                            <div className="flex justify-start">
                                <div className="flex gap-2 items-center max-w-[85%]">
                                    <div className="h-8 w-8 rounded-full bg-indigo-600 flex items-center justify-center shadow-sm">
                                        <FaRobot className="text-white text-xs" />
                                    </div>
                                    <div className={`p-3 rounded-2xl rounded-tl-none flex items-center h-[42px] ${isDarkMode ? 'bg-gray-800 border-gray-700 border' : 'bg-white border-gray-200 border shadow-sm'}`}>
                                        <div className="flex space-x-1.5">
                                            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                                            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-150"></div>
                                            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-300"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                        <div ref={messagesEndRef} />
                    </div>

                    {/* Zona de Entrada / Inputs */}
                    <div className={`p-3 border-t z-10 ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}>
                        <form onSubmit={handleSend} className="relative flex items-end gap-2">
                            <textarea
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                onKeyDown={handleKeyDown}
                                placeholder={locale === 'en' ? "Ask your question..." : "Haz tu pregunta..."}
                                rows={1}
                                className={`w-full py-3 px-4 rounded-xl resize-none focus:outline-none transition-colors border max-h-[100px] overflow-y-auto shadow-inner ${isDarkMode
                                    ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-indigo-500 focus:bg-gray-600'
                                    : 'bg-gray-100 border-gray-200 text-gray-800 placeholder-gray-500 focus:border-blue-500 focus:bg-white'
                                    }`}
                                disabled={isLoading}
                            />
                            <button
                                type="submit"
                                disabled={!input.trim() || isLoading}
                                aria-label="Enviar Mensaje"
                                className={`h-[48px] px-4 rounded-xl flex items-center justify-center transition-all ${!input.trim() || isLoading
                                    ? 'bg-gray-300 text-gray-500 cursor-not-allowed dark:bg-gray-700 dark:text-gray-500'
                                    : 'bg-blue-600 hover:bg-blue-700 text-white shadow-md active:scale-95'
                                    }`}
                            >
                                <FaPaperPlane size={18} />
                            </button>
                        </form>
                    </div>
                </div>
            )}

            {/* Botón Circular cuando está cerrado */}
            {!isOpen && (
                <button
                    onClick={toggleChat}
                    aria-label="Hablar con Asistente"
                    className="group relative flex items-center justify-center p-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-110 active:scale-95 z-50 focus:outline-none"
                >
                    <FaRobot size={28} className="group-hover:animate-pulse" />
                    <span className="absolute -top-1 -right-1 flex h-4 w-4">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-300 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-4 w-4 bg-blue-500 border-2 border-white dark:border-gray-900"></span>
                    </span>
                </button>
            )}
        </div>
    );
};

export default Chatbot;
