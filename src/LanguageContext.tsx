'use client';

import React, {
    createContext,
    useState,
    useContext,
    useEffect,
    Dispatch,
    SetStateAction,
} from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { IntlProvider } from 'react-intl';
import en from './messages/en.json';
import es from './messages/es.json';

interface LanguageContextProps {
    locale: string;
    setLocale: Dispatch<SetStateAction<string>>;
}

const LanguageContext = createContext<LanguageContextProps | undefined>(
    undefined,
);

interface LanguageProviderProps {
    children: React.ReactNode;
}

const messages = {
    en,
    es
};

type Messages = typeof messages;

export const LanguageProvider: React.FC<LanguageProviderProps> = ({
    children,
}) => {
    const pathname = usePathname();
    const router = useRouter();
    const initialLocale = pathname.startsWith('/es') ? 'es' : 'en'; // Modificado
    const [locale, setLocale] = useState(initialLocale);


    useEffect(() => {
        console.log("LanguageProvider useEffect locale changed:", locale);
    }, [locale]);

    return (
        <LanguageContext.Provider value={{ locale, setLocale }}>
            <IntlProvider locale={locale} messages={messages[locale as keyof Messages]}>
                {children}
            </IntlProvider>
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error(
            'useLanguage must be used within a LanguageProvider',
        );
    }
    return context;
};