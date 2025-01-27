import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { APP_LOCALES } from 'shared/config/locales';

void i18n.use(initReactI18next).init({
  lng: APP_LOCALES.EN,
  fallbackLng: APP_LOCALES.EN,
  debug: false,

  interpolation: {
    escapeValue: false, // not needed for react!!
  },

  resources: { en: { translations: {} } },
});

export default i18n;
