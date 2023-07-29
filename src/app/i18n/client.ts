// @ts-nocheck
'use client';
import {useEffect} from 'react';
import i18next from 'i18next';
import {
  initReactI18next,
  useTranslation as useTranslationOrg,
} from 'react-i18next';
import resourcesToBackend from 'i18next-resources-to-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import {getOptions, languages} from './settings';
import {locales} from './locales.enum';

const runsOnServerSide = typeof window === 'undefined';

//
i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(
    resourcesToBackend(
      (language, namespace) =>
        import(`../../../public/locales/${language}/${namespace}.json`),
    ),
  )
  .init({
    ...getOptions(),
    lang: undefined, // let detect the language on client side
    detection: {
      order: ['path', 'htmlTag', 'cookie', 'navigator'],
    },
    preload: runsOnServerSide ? languages : [],
  });

export function useTranslation(
  lang: locales | undefined,
  ns: string,
  options?,
) {
  const ret = useTranslationOrg(ns, options);
  const {i18n} = ret;
  if (runsOnServerSide && i18n.resolvedLanguage !== lang) {
    i18n.changeLanguage(lang);
  } else {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
      if (i18n.resolvedLanguage === lang) return;
      i18n.changeLanguage(lang);
    }, [lang, i18n]);
  }
  return ret;
}
