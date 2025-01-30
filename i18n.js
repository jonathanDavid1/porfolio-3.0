import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import { getConfig } from 'next/config';
import LanguageDetector from 'i18next-browser-languagedetector';

const { publicRuntimeConfig } = getConfig();
const { localePath } = publicRuntimeConfig;

i18next
  .use(initReactI18next)
  .use(LanguageDetector) // Detecta el idioma del navegador
  .init({
    fallbackLng: 'en',
    lng: 'en',
    ns: ['common'],
    defaultNS: 'common',
    backend: {
      loadPath: `${localePath}/{{lng}}/{{ns}}.json`,
    },
    react: {
      useSuspense: false, // Asegúrate de que esto esté configurado si estás usando SSR
    },
  });

export default i18next;
