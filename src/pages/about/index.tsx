import dompurify from 'isomorphic-dompurify';
import type {InferGetStaticPropsType} from 'next';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import AboutMeHero from '../../components/AboutMeHero';
import type {TechStack} from '../../components/TechStackCarousel';
import NextLink from '../../components/basic/NextLink';
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
      <main className="mt-10">
        <article className="mb-20" id="about-me-details">
          <h1>About Carlo Gino Catapang</h1>
          {aboutMeDetails.map(detail => {
            return (
              <section
                className="flex flex-col items-center p-2"
                key={detail.key}
              >
                <h3 className="mb-10 text-4xl">{detail.label}</h3>
                <div
                  className="text-justify max-w-screen-md"
                  dangerouslySetInnerHTML={{
                    __html: dompurify.sanitize(detail.content),
                  }}
                />
              </section>
            );
          })}
        </article>

        <h2 className="text-center">This website is powered by</h2>
        <TechStackCarousel techStacks={techStacks} />

        <section className="mt-4 mb-2">
          <h4 className="text-center">
            This awesome carousel is easily made using&nbsp;
            <NextLink
              href="https://github.com/leandrowd/react-responsive-carousel"
              target="_blank"
              aria-label="React Responsive Carousel"
              rel="noreferrer"
              className="text-primary-dark"
            >
              React Responsive Carousel
            </NextLink>
            .
          </h4>
        </section>
        <section className="pb-8">
          <h4 className="text-center">
            Here is the link to my&nbsp;
            <NextLink
              href="https://github.com/codegino/profile"
              target="_blank"
              aria-label="Github Repo"
              className="text-primary-dark"
            >
              Github Repo
            </NextLink>
            .
          </h4>
        </section>
      </main>
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
