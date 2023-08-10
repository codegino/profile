import {FC, PropsWithChildren} from 'react';
import {LocaleTypes} from '../app/i18n/settings';

export type PropsWithLocale = {
  params: {
    lang: LocaleTypes;
  };
};
