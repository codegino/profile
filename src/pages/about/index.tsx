import styled from '@emotion/styled';
import dompurify from 'isomorphic-dompurify';
import {InferGetStaticPropsType} from 'next';
import Head from 'next/head';
import Link from 'next/link';
import AboutMeHero from '../../components/AboutMeHero';
import TechStackCarousel, {TechStack} from '../../components/TechStackCarousel';
import {StaticContent} from '../../models/static-content';
import {getImageFromSupabase} from '../../utils/supabase-image';
import {supabase} from '../../utils/supabaseClient';

export default function AboutMe({
  aboutMeDetails,
  img,
  svg,
  techStacks,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Head>
        <title>About Carlo Gino Catapang</title>
        <meta name="description" content="Carlo Gino Catapang" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <AboutMeHero img={img} svg={svg} />
      <AboutMeSection id="about-me-details">
        <h1>About Me</h1>
        {aboutMeDetails.map(detail => {
          return (
            <AboutMeDetail key={detail.key}>
              <h3>{detail.label}</h3>
              <div
                className="content"
                dangerouslySetInnerHTML={{
                  __html: dompurify.sanitize(detail.content),
                }}
              />
            </AboutMeDetail>
          );
        })}
      </AboutMeSection>

      <h2 style={{textAlign: 'center'}}>This website is powered by</h2>
      <TechStackCarousel techStacks={techStacks} />

      <AdditionalInfo style={{marginTop: '1rem', marginBottom: '0.5rem'}}>
        This awesome carousel is easily made using&nbsp;
        <Link href="https://github.com/leandrowd/react-responsive-carousel">
          <a
            target="_blank"
            aria-label="React Responsive Carousel"
            rel="noopener"
          >
            React Responsive Carousel
          </a>
        </Link>
        .
      </AdditionalInfo>
      <AdditionalInfo style={{marginBottom: '1.5rem'}}>
        Here is the link to my&nbsp;
        <Link href="https://github.com/codegino/profile">
          <a target="_blank" aria-label="Github Repo" rel="noopener">
            Github Repo
          </a>
        </Link>
        .
      </AdditionalInfo>
    </>
  );
}

export const getStaticProps = async () => {
  const {data: aboutMe} = await supabase
    .from('static_content')
    .select('key, content, label')
    .eq('category', 'about_me');

  const {img, svg} = await getImageFromSupabase('about_me_hero_cover');

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
      aboutMeDetails: aboutMe as StaticContent[],
      techStacks,
      img,
      svg,
    },
  };
};

const AdditionalInfo = styled.p`
  text-align: center;

  a {
    color: var(--color-primary-dark);
  }
`;

const AboutMeSection = styled.section`
  margin-bottom: var(--margin-big);

  h1 {
    text-align: center;
    font-size: 3em;
  }
`;

const AboutMeDetail = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;

  .content {
    max-width: 40rem;
    text-align: justify;
  }
`;
