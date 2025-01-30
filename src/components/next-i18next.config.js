// next-i18next.config.js
module.exports = {
    i18n: {
      defaultLocale: 'en',
      locales: ['es', 'en'],
      localeDetection: false,
    },
     /** To avoid issues when deploying */
    reloadOnPrerender: process.env.NODE_ENV === 'development',
  };