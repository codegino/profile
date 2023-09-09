// create function that will add '/sv' to the slug when the language is Swedish
export const createI18nUrlSegment = (slug: string, lang: string = 'en') => {
  if (lang === 'sv') {
    return `/sv${slug}`;
  }

  return slug;
};
