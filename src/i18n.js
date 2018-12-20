import i18n from 'i18next'
import { reactI18nextModule } from 'react-i18next'

import translationEN from './locales/en-US.json'
import translationDE from './locales/de-DE.json'

const resources = {
  en: {
    translation: translationEN,
  },
  de: {
    translation: translationDE,
  },
}

i18n.use(reactI18nextModule).init({
  resources,
  lng: 'en',

  interpolation: {
    escapeValue: false,
  },
})

export default i18n
