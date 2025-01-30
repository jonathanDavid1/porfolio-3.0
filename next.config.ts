const { i18n } = require('./next-i18next.config');

module.exports = {
  i18n,
  publicRuntimeConfig: {
    localePath: typeof window === 'undefined' ? require('path').resolve('./public/locales') : '/locales',
  },
};
