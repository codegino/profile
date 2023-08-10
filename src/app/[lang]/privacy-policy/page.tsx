import React from 'react';
import {LocaleTypes} from '../../i18n/settings';
import {client} from '../../../utils/contentful.utils';
import {mapLocale} from '../../i18n/map-locale.util';
import {NextPage} from 'next';
import {PropsWithLocale} from '../../../types/server-component';

const getData = async (lang: LocaleTypes) => {
  const privacyPolicy = await client.getEntry('3qFRrXH6Qng8ZEAsIwJKRz', {
    locale: mapLocale(lang),
  });

  return {
    privacyPolicy: privacyPolicy.fields.content as string,
  };
};

const PrivacyPolicyPage: NextPage<PropsWithLocale> = async ({
  params: {lang},
}) => {
  const {privacyPolicy} = await getData(lang);

  return (
    <main className="w-full flex justify-center mb-8">
      <article
        className="max-w-[50rem]"
        dangerouslySetInnerHTML={{
          __html: privacyPolicy,
        }}
      ></article>
    </main>
  );
};

export default PrivacyPolicyPage;
