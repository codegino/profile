export const fallbackLng = 'en';
export const languages = [fallbackLng, 'sv'];
export const defaultNS = 'translation';

export function getOptions(lang = fallbackLng, ns = defaultNS) {
  return {
    // debug: true,
    supportedLngs: languages,
    fallbackLng,
    lang,
    fallbackNS: defaultNS,
    defaultNS,
    ns,
  };
}
