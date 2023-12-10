import React from 'react';
import {client} from '../../utils/contentful.utils';
import {mapLocale} from '../i18n/map-locale.util';
import {NextPage} from 'next';
import {getLocale} from '@/app/i18n/server';

const getData = async () => {
  const lang = getLocale();
  const privacyPolicy = await client.getEntry('3qFRrXH6Qng8ZEAsIwJKRz', {
    locale: mapLocale(lang),
  });

  return {
    privacyPolicy: privacyPolicy.fields.content as string,
  };
};

const PrivacyPolicyPage: NextPage = async () => {
  const {privacyPolicy} = await getData();

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
