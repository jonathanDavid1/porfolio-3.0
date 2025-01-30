import { Html, Head, Main, NextScript } from 'next/document'
import { useState, useEffect } from 'react';
import { useTranslation } from 'next-i18next';

export default function Document() {
    const { i18n } = useTranslation();
    const [darkMode, setDarkMode] = useState(false);

      useEffect(() => {
        const systemDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
          setDarkMode(systemDarkMode);
        if (systemDarkMode) {
          document.documentElement.classList.add('dark')
        }else {
           document.documentElement.classList.remove('dark')
        }
   }, [])
    useEffect(() => {
      if (darkMode) {
         document.documentElement.classList.add('dark')
         }else {
          document.documentElement.classList.remove('dark')
         }
     },[darkMode]);

    return (
        <Html lang={i18n.language} className={darkMode ? 'dark' : ''}>
            <Head />
            <body className="antialiased bg-background-DEFAULT dark:bg-background-secondary">
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}