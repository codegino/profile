import styled from '@emotion/styled';
import {InferGetStaticPropsType} from 'next';
import Head from 'next/head';
import Footer from '../../components/Footer';
import {StaticContent} from '../../models/static-content';
import {supabase} from '../../utils/supabaseClient';
import dompurify from 'isomorphic-dompurify';

const AboutMeDetail = styled.div`
  padding: 1rem;
  border: 1px solid black;
`;

export default function AboutMe({
  aboutMeDetails,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  console.log(aboutMeDetails);
  return (
    <>
      <Head>
        <title>Carlo Gino</title>
        <meta name="description" content="Carlo Gino Catapang" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

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
  const {data: aboutMe, error} = await supabase
    .from('static_content')
    .select('key, content, label')
    .eq('category', 'about_me');

  return {
    props: {
      aboutMeDetails: aboutMe as StaticContent[],
    },
  };
};
