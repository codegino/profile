export const fallbackLng = 'en';
export const languages = [fallbackLng, 'sv'];
export const defaultNS = 'common';
import type {InitOptions} from 'i18next';

export function getOptions(lang = fallbackLng, ns = defaultNS): InitOptions {
  return {
    // debug: true,
    supportedLngs: languages,
    fallbackLng,
    lng: lang,
    fallbackNS: defaultNS,
    defaultNS,
    ns,
  };
}
