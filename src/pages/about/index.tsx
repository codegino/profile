import styled from '@emotion/styled';
import dompurify from 'isomorphic-dompurify';
import type {InferGetStaticPropsType} from 'next';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import Link from 'next/link';
import AboutMeHero from '../../components/AboutMeHero';
import type {TechStack} from '../../components/TechStackCarousel';
import {commonMetaTags} from '../../frontend-utils/meta-tags';
import type {StaticContent} from '../../models/static-content';
import {
  getImageFromSupabase,
  getUrlFromSupabase,
} from '../../utils/supabase.utils';
import {supabase} from '../../utils/supabaseClient';

const TechStackCarousel = dynamic(
  () => import('../../components/TechStackCarousel'),
  {ssr: false},
);

export default function AboutMe({
  aboutMeDetails,
  img,
  svg,
  techStacks,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Head>
        <title>About Page | Code Gino | Carlo Gino Catapang</title>
        {commonMetaTags('About Page', '/about')}
      </Head>

      <AboutMeHero img={img} svg={svg} />
      <AboutMeSection id="about-me-details">
        <h1>About Carlo Gino Catapang</h1>
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

      <h2 className="tech-stack-label">
        This website is powered by
        <style jsx>{`
          .tech-stack-label {
            text-align: center;
          }
        `}</style>
      </h2>
      <TechStackCarousel techStacks={techStacks} />

      <section className="mt-4 mb-2">
        <AdditionalInfo>
          This awesome carousel is easily made using&nbsp;
          <Link href="https://github.com/leandrowd/react-responsive-carousel">
            <a
              target="_blank"
              aria-label="React Responsive Carousel"
              rel="noopener nofollow"
            >
              React Responsive Carousel
            </a>
          </Link>
          .
        </AdditionalInfo>
      </section>
      <section className="mb-8">
        <AdditionalInfo>
          Here is the link to my&nbsp;
          <Link href="https://github.com/codegino/profile">
            <a target="_blank" aria-label="Github Repo" rel="noopener nofollow">
              Github Repo
            </a>
          </Link>
          .
        </AdditionalInfo>
      </section>
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
      url: await getUrlFromSupabase('react_logo'),
    },
    {
      name: 'NextJS',
      url: await getUrlFromSupabase('nextjs_logo'),
    },
    {
      name: 'Prettier',
      url: await getUrlFromSupabase('prettier_logo'),
    },
    {
      name: 'Eslint',
      url: await getUrlFromSupabase('eslint_logo'),
    },
    {
      name: 'Emotion',
      url: await getUrlFromSupabase('emotion_logo'),
    },
    {
      name: 'Supabase',
      url: await getUrlFromSupabase('supabase_logo'),
    },
    {
      name: 'Github',
      url: await getUrlFromSupabase('github_logo'),
    },
    {
      name: 'Vercel',
      url: await getUrlFromSupabase('vercel_logo'),
    },
    {
      name: 'TypeScript',
      url: await getUrlFromSupabase('typescript_logo'),
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

const AboutMeSection = styled.article`
  margin-bottom: var(--spacing-big);
`;

const AboutMeDetail = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: var(--spacing-small);

  .content {
    max-width: 75rem;
    text-align: justify;
    font-size: 1.6rem;
  }
`;
