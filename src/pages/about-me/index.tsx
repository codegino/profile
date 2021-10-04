import styled from '@emotion/styled';
import dompurify from 'isomorphic-dompurify';
import {InferGetStaticPropsType} from 'next';
import Head from 'next/head';
import {getPlaiceholder} from 'plaiceholder';
import AboutMeHero from '../../components/AboutMeHero';
import Footer from '../../components/Footer';
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
        <title>Carlo Gino</title>
        <meta name="description" content="Carlo Gino Catapang" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <AboutMeHero img={img} svg={svg} />
      <h1>About Me</h1>
      <p>This page is under construction</p>
      {aboutMeDetails.map(detail => {
        return (
          <AboutMeDetail key={detail.key}>
            <h3>{detail.label}</h3>
            <div
              dangerouslySetInnerHTML={{
                __html: dompurify.sanitize(detail.content),
              }}
            />
          </AboutMeDetail>
        );
      })}
      <Footer />
    </>
  );
}

export const getStaticProps = async () => {
  const {data: aboutMe} = await supabase
    .from('static_content')
    .select('key, content, label')
    .eq('category', 'about_me');

  const {img, svg} = await getPlaiceholder('/assets/einstein-cover.png');

  return {
    props: {
      aboutMeDetails: aboutMe as StaticContent[],
      img,
      svg,
    },
  };
};

const AboutMeDetail = styled.div`
  padding: 1rem;
  border: 1px solid black;
`;
