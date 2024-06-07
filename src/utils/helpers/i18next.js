import i18next from 'i18next';
import {initReactI18next} from 'react-i18next';
import language from '../translate/language.json';

export const resources = {
  en: {translation: language.en},
  fr: {translation: language.fr},
  it: {translation: language.it},
  de: {translation: language.de},
};
i18next.use(initReactI18next).init({
  lng: 'en',
  resources: resources,
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18next;
