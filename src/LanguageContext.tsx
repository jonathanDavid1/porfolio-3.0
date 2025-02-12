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

export const LanguageProvider: React.FC<LanguageProviderProps> = ({
  children,
}) => {
  const pathname = usePathname();
  const router = useRouter(); // Mantenemos useRouter por si lo usas en otra parte
  const initialLocale = pathname && pathname.includes('es') ? 'es' : 'en';
  const [locale, setLocale] = useState(initialLocale);

  useEffect(() => {
    // Eliminamos el acceso a router.locale
    // if (router.locale) {
    //   console.log("LanguageProvider useEffect router.locale:", router.locale);
    //   setLocale(router.locale);
    // }
  }, []); // Eliminamos router.locale de las dependencias

  useEffect(() => {
    console.log("LanguageProvider useEffect locale changed:", locale);
  }, [locale]);

  return (
    <LanguageContext.Provider value={{ locale, setLocale }}>
      <IntlProvider locale={locale} messages={messages[locale]}>
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