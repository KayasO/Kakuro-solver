import i18n from 'i18next'
import { reactI18nextModule } from 'react-i18next'

import translationEN from './locales/en-US.json'
import translationDE from './locales/de-DE.json'

i18n.use(reactI18nextModule).init({
  lng: 'en-US',
  resources: {
    en: {
      translation: translationEN,
    },
    de: {
      translation: translationDE,
    },
  },
  interpolation: {
    formatSeparator: '/',
  },
})

export default i18n
