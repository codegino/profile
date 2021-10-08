import {InferGetStaticPropsType} from 'next';
import Head from 'next/head';
import Link from 'next/link';
import TechStackCarousel, {TechStack} from '../../components/TechStackCarousel';

export default function AboutMe({
  techStacks,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Head>
        <title>About Carlo Gino Catapang</title>
        <meta name="description" content="Carlo Gino Catapang" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 style={{textAlign: 'center'}}>This website is powered by</h1>
      <TechStackCarousel techStacks={techStacks} />

      <p
        style={{textAlign: 'center', marginTop: '1rem', marginBottom: '0.5rem'}}
      >
        This awesome carousel is easily made using&nbsp;
        <Link href="https://github.com/leandrowd/react-responsive-carousel">
          <a
            style={{color: 'blue'}}
            target="_blank"
            aria-label="React Responsive Carousel"
            rel="noopener"
          >
            React Responsive Carousel
          </a>
        </Link>
        .
      </p>
      <p style={{textAlign: 'center', marginBottom: '1.5rem'}}>
        Here is the link to my&nbsp;
        <Link href="https://github.com/codegino/profile">
          <a
            style={{color: 'blue'}}
            target="_blank"
            aria-label="Github Repo"
            rel="noopener"
          >
            Github Repo
          </a>
        </Link>
        .
      </p>
    </>
  );
}

export const getStaticProps = async () => {
  const techStacks: TechStack[] = [
    {
      name: 'React ',
      url: 'https://miro.medium.com/max/1400/0*kfom-b3fk4IqgDgc.png',
    },
    {
      name: 'NextJS',
      url: 'https://miro.medium.com/max/1000/1*htbUdWgFQ3a94PMEvBr_hQ.png',
    },
    {
      name: 'Prettier',
      url: 'https://repository-images.githubusercontent.com/75104123/f6f27280-61e5-11e9-8759-33288e842a50',
    },
    {
      name: 'Eslint',
      url: 'https://blog.scottlogic.com/bquinn/assets/ESLint.png',
    },
    {
      name: 'Emotion',
      url: 'https://gatsby-emotion-tailwind-starter.netlify.app/static/a988bbfd6887ce9472cbd998d301287a/6fd42/emotion.png',
    },
    {
      name: 'Supabase',
      url: 'https://getlogo.net/wp-content/uploads/2020/11/supabase-logo-vector.png',
    },
    {
      name: 'Github',
      url: 'https://miro.medium.com/max/1400/1*JLYlSLSK8-AZo8gt9UdYqA.jpeg',
    },
    {
      name: 'Vercel',
      url: 'https://mms.businesswire.com/media/20210623005228/en/887051/23/vercel-logotype-dark.jpg',
    },
    {
      name: 'TypeScript',
      url: 'https://cdn-ssl-devio-img.classmethod.jp/wp-content/uploads/2020/09/typescript.png',
    },
  ];

  return {
    props: {
      techStacks,
    },
  };
};
