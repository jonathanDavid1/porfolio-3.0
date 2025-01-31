import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { ThemeProvider } from '@/ThemeContext';
import { LanguageProvider } from '@/LanguageContext';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <LanguageProvider>
             <ThemeProvider>
                <Component {...pageProps} />
            </ThemeProvider>
        </LanguageProvider>
    );
}

export default MyApp;