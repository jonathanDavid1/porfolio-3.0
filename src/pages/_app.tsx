// src/pages/_app.tsx
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { appWithTranslation } from 'next-i18next';
import { ThemeProvider } from '@/ThemeContext';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <ThemeProvider> {/* Wrap your application */}
            <Component {...pageProps} />
        </ThemeProvider>
    );
}

export default appWithTranslation(MyApp);