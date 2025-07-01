module.exports = {
  i18n: {
    defaultLocale: 'pt',
    locales: ['pt', 'en'],
    localePath: './locales',
    localeDetection: true,
  },
  fallbackLng: {
    default: ['pt'],
  },
  reloadOnPrerender: process.env.NODE_ENV === 'development',
};