import React from 'react';
import {client} from '../../utils/contentful.utils';
import {mapLocale} from '../i18n/map-locale.util';
import {NextPage} from 'next';
import {FALLBACK_LOCALE} from '../i18n/settings';

const getData = async () => {
  const privacyPolicy = await client.getEntry('3qFRrXH6Qng8ZEAsIwJKRz', {
    locale: mapLocale(FALLBACK_LOCALE),
  });

  return {
    privacyPolicy: privacyPolicy.fields.content as string,
  };
};

const PrivacyPolicyPage: NextPage = async () => {
  const {privacyPolicy} = await getData();

  return (
    <main className="mb-8 flex w-full justify-center">
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
