import {InferGetStaticPropsType} from 'next';
import Head from 'next/head';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Resume from '../components/Resume';
import {WorkExperience} from '../models/resume';
import {supabase} from '../utils/supabaseClient';

export default function Home({
  workExperiences,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Head>
        <title>Carlo Gino</title>
        <meta name="description" content="Carlo Gino Catapang" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>Welcome to my page</h1>
      <p>This page is under construction</p>
      <Hero />
      <Resume workExperiences={workExperiences} />
      <Footer />
    </>
  );
}

export const getStaticProps = async () => {
  let {data: workExperiences} = await supabase
    .from<WorkExperience>('work_experience')
    .select('*');

  return {
    props: {
      workExperiences: workExperiences as WorkExperience[],
    },
  };
};
