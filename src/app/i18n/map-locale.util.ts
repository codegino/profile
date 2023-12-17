import {Locales} from './settings';

const CONTENTFUL_LOCALES = {
  sv: 'sv',
  en: 'en-US',
};

export const mapLocale = (locale: Locales): string => {
  return CONTENTFUL_LOCALES[locale];
};
