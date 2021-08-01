import {InferGetStaticPropsType} from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Hero from '../components/Hero';
import Resume from '../components/Resume';
import {WorkExperience} from '../models/resume';
import styles from '../styles/Home.module.css';
import {supabase} from '../utils/supabaseClient';

export default function Home({
  workExperiences,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Carlo Gino</title>
        <meta name="description" content="Carlo Gino Catapang" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to my page</h1>
        <p className={styles.description}>This page is under construction</p>
        <Hero />
        <Resume workExperiences={workExperiences} />
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}

export const getStaticProps = async () => {
  let {data: workExperiences} = await supabase
    .from<WorkExperience>('work_experiences')
    .select('*');

  return {
    props: {
      workExperiences: workExperiences as WorkExperience[],
    },
  };
};
