import type {InferGetStaticPropsType} from 'next';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import {commonMetaTags} from '../frontend-utils/meta-tags';
import generateSitemap from '../lib/sitemap';

export default function Home({}: InferGetStaticPropsType<
  typeof getStaticProps
>) {
  return (
    <>
      <Head>
        <title>Welcome to my Website | Code Gino | Carlo Gino Catapang</title>
        {commonMetaTags('Home Page')}
      </Head>
    </>
  );
}

export const getStaticProps = async () => {
  if (process.env.NODE_ENV === 'production') {
    await generateSitemap();
  }

  return {
    props: {},
  };
};
