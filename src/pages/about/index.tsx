import styled from '@emotion/styled';
import dompurify from 'isomorphic-dompurify';
import {InferGetStaticPropsType} from 'next';
import Head from 'next/head';
import Link from 'next/link';
import AboutMeHero from '../../components/AboutMeHero';
import TechStackCarousel, {TechStack} from '../../components/TechStackCarousel';
import {commonMetaTags} from '../../frontend-utils/meta-tags';
import {StaticContent} from '../../models/static-content';
import {
  getImageFromSupabase,
  getImageURLFromSupabase,
} from '../../utils/supabase-image';
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
        <meta name="description" content="Carlo Gino Catapang" />$
        {commonMetaTags('/about')}
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

      <h2 style={{textAlign: 'center'}}>This website is powered by</h2>
      <TechStackCarousel techStacks={techStacks} />

      <AdditionalInfo
        style={{marginTop: '1rem', marginBottom: 'var(--margin-very-small'}}
      >
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
      <AdditionalInfo style={{marginBottom: ' var(--margin-medium)'}}>
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
      url: await getImageURLFromSupabase('react_logo'),
    },
    {
      name: 'NextJS',
      url: await getImageURLFromSupabase('nextjs_logo'),
    },
    {
      name: 'Prettier',
      url: await getImageURLFromSupabase('prettier_logo'),
    },
    {
      name: 'Eslint',
      url: await getImageURLFromSupabase('eslint_logo'),
    },
    {
      name: 'Emotion',
      url: await getImageURLFromSupabase('emotion_logo'),
    },
    {
      name: 'Supabase',
      url: await getImageURLFromSupabase('supabase_logo'),
    },
    {
      name: 'Github',
      url: await getImageURLFromSupabase('github_logo'),
    },
    {
      name: 'Vercel',
      url: await getImageURLFromSupabase('vercel_logo'),
    },
    {
      name: 'TypeScript',
      url: await getImageURLFromSupabase('typescript_logo'),
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
  margin-bottom: var(--margin-big);
`;

const AboutMeDetail = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: var(--padding-small);

  .content {
    max-width: 75rem;
    text-align: justify;
    font-size: 1.6rem;
  }
`;
