import GreetingsContent from '@/components/GreetingsContent';
import type {NextPage} from 'next';
import dynamicImport from 'next/dynamic';
import Script from 'next/script';
import {FullScreenWrapper} from '../components/FullScreenWrapper';
import AboutTeaser from '../components/home/AboutTeaser';
import CodingActivity from '../components/home/CodingActivity';
import SkillsHighlights from '../components/home/SkillsHighlights';
import {newCommonMetaTags} from '../frontend-utils/meta-tags';
import BlogSuggestionsList from '../modules/blog/BlogSuggestionsList';
import {getBlurringImage} from '../utils/contentful.utils';
import {getBlogsMetadata} from '../utils/mdx.utils';
import {fetchSkills} from '../utils/resume-props';
import {blogAssets} from '@/data/blog-asset';
import ParallaxEyes from '../components/ParallaxEyes';

const SubscribeForm = dynamicImport(
  () => import('../components/SubscribeForm'),
);

export const metadata = {
  ...newCommonMetaTags('Home Page', '/'),
  title: 'Home Page | Code Gino | Carlo Gino Catapang',
};

const HomePage: NextPage = async () => {
  const {
    props: {skills, profileImage, profileSvg, blogs},
  } = await getStaticProps();

  return (
    <>
      <Script
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: `{
          "@context": "http://schema.org/",
          "@type": "Person",
          "name": "Carlo Gino Catapang",
          "jobTitle": "Senior Software Engineer",
          "url": "https://carlogino.com"
          }`,
        }}
      />
      <FullScreenWrapper
        bl
        className="flex h-screen min-h-screen w-full items-center justify-center bg-neutral-200 dark:bg-neutral-900"
      >
        <ParallaxEyes />
        <GreetingsContent />

        {/* Decorative background accents */}
        <div
          aria-hidden
          className="bg-primary-300/20 dark:bg-primary-700/20 pointer-events-none absolute -top-24 right-[10%] size-72 rounded-full blur-3xl"
        />
        <div
          aria-hidden
          className="bg-primary-200/20 dark:bg-primary-800/20 pointer-events-none absolute -bottom-32 left-[5%] size-96 rounded-full blur-3xl"
        />

        <svg
          className="absolute inset-0 -z-10 size-full stroke-primary-900 [mask-image:radial-gradient(50%_105%_at_bottom,black,transparent)] dark:stroke-primary-50"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="0787a7c5-978c-4f66-83c7-11c213f99cb7"
              width={200}
              height={200}
              x="50%"
              y={-1}
              patternUnits="userSpaceOnUse"
            >
              <path d="M.5 200V.5H200" fill="none" />
            </pattern>
          </defs>
          <rect
            width="100%"
            height="100%"
            strokeWidth={0}
            fill="url(#0787a7c5-978c-4f66-83c7-11c213f99cb7)"
          />
        </svg>
      </FullScreenWrapper>
      <main>
        <div id="resume-summary" className="bg-neutral-100 dark:bg-neutral-800">
          <AboutTeaser img={profileImage} svg={profileSvg} />
          <SkillsHighlights skills={skills} />
        </div>
        <div className="bg-neutral-50 dark:bg-neutral-700">
          <BlogSuggestionsList blogs={blogs} />
        </div>
        <div className="bg-neutral-100 dark:bg-neutral-800">
          <CodingActivity />
        </div>
      </main>
      <div className="bg-neutral-50 dark:bg-neutral-700" id="subscribe">
        <SubscribeForm />
      </div>
    </>
  );
};

const getStaticProps = async () => {
  const {img: profileImage, svg: profileSvg} = await getBlurringImage(
    'profile-picture.jpeg',
  );

  const blogs = (await getBlogsMetadata())
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 4);

  for (const blog of blogs) {
    blog.bannerId = blogAssets[blog.slug];
  }

  const skills = await fetchSkills(true);

  return {
    props: {
      skills,
      blogs,
      profileImage,
      profileSvg,
    },
  };
};

export default HomePage;
