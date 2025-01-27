import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { APP_LOCALES } from 'shared/config/locales';

void i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: APP_LOCALES.EN,
    debug: __IS_DEV ? true : false,

    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
