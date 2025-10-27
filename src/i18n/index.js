import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import fa from './fa';
import en from './en';

i18next
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      fa: { translation: fa },
    },
    lng: localStorage.getItem('language') || 'en', 
    fallbackLng: 'en', 
    interpolation: {
      escapeValue: false, 
    },
  });

export default i18next;
