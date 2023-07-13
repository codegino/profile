import {locales} from './locales.enum';

const CONTENTFUL_LOCALES = {
  sv: 'sv',
  en: 'en-US',
};

export const mapLocale = (locale: locales): string => {
  return CONTENTFUL_LOCALES[locale];
};
