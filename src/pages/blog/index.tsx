import styled from '@emotion/styled';
import {InferGetStaticPropsType} from 'next';
import Head from 'next/head';
import Link from 'next/link';

export default function Home({}: InferGetStaticPropsType<
  typeof getStaticProps
>) {
  return (
    <>
      <Head>
        <title>Carlo Gino Catapang</title>
        <meta name="description" content="Carlo Gino Catapang" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 style={{textAlign: 'center'}}>Hello world</h1>
      {/* <Container>
        {[].map(blog => {
          return (
            <div key={blog.slug}>
              <Link href={`/blog/${blog.slug}`}>
                <a aria-label={blog.title}>
                  <h2>{blog.title}</h2>
                  <h3>{blog.date}</h3>
                </a>
              </Link>
            </div>
          );
        })}
        <p>Testing</p>
      </Container> */}
    </>
  );
}

const Container = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const getStaticProps = async () => {
  return {
    props: {},
  };
};
