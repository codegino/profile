import styled from '@emotion/styled';
import dompurify from 'isomorphic-dompurify';
import {InferGetStaticPropsType} from 'next';
import Head from 'next/head';
import {getPlaiceholder} from 'plaiceholder';
import AboutMeHero from '../../components/AboutMeHero';
import {StaticContent} from '../../models/static-content';
import {supabase} from '../../utils/supabaseClient';

export default function AboutMe({
  aboutMeDetails,
  img,
  svg,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Head>
        <title>About Carlo Gino Catapang</title>
        <meta name="description" content="Carlo Gino Catapang" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <AboutMeHero img={img} svg={svg} />
      <section id="about-me-details">
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
      </section>
    </>
  );
}

export const getStaticProps = async () => {
  const {data: aboutMe} = await supabase
    .from('static_content')
    .select('key, content, label')
    .eq('category', 'about_me');

  const {img, svg} = await getPlaiceholder('/assets/superman-cover.png');

  return {
    props: {
      aboutMeDetails: aboutMe as StaticContent[],
      img,
      svg,
    },
  };
};

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
