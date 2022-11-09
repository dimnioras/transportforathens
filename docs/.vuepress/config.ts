import { defineUserConfig } from 'vuepress'
import { defaultTheme } from '@vuepress/theme-default'

export default defineUserConfig({
  locales: {
    // The key is the path for the locale to be nested under.
    // As a special case, the default locale can use '/' as its path.
    '/': {
      lang: 'el-GR',
      title: 'Transport for Athens',
      description: 'Ένα όραμα για μια καλύτερη συγκοινωνία στην Αθήνα και την Αττική',
    },
    '/en/': {
      lang: 'en-US',
      title: 'Transport for Athens',
      description: 'A vision for a better public transportation system in Athens',
    },
  },
  head: [['link', { rel: 'icon', href: '/images/TransportForAthens_logo_favicon.png' }]],
  theme: defaultTheme({
    logo: '/images/TransportForAthens_logo_favicon.png',
    locales: {
      '/': {
        selectLanguageText: 'Language',
        selectLanguageName: 'Ελληνικά',
      },
      '/en/': {
        selectLanguageText: 'Γλώσσα',
        selectLanguageName: 'English',
      },
    },
  }),
})