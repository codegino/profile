import styled from '@emotion/styled';
import dompurify from 'isomorphic-dompurify';
import {InferGetStaticPropsType} from 'next';
import Head from 'next/head';
import Link from 'next/link';
import AboutMeHero from '../../components/AboutMeHero';
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
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Head>
        <title>About Anne Mariel Recio</title>
        <meta name="description" content="Anne Mariel Recio" />
      </Head>

      <AboutMeHero img={img} svg={svg} />
      <AboutMeSection id="about-me-details">
        <h1>About Anne Mariel Recio</h1>
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
    </>
  );
}

export const getStaticProps = async () => {
  const {data: aboutMe} = await supabase
    .from('static_content')
    .select('key, content, label')
    .eq('category', 'about_me');

  const {img, svg} = await getImageFromSupabase('about_me_hero_cover');

  return {
    props: {
      aboutMeDetails: aboutMe as StaticContent[],
      img,
      svg,
    },
  };
};

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
