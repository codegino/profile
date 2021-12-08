import styled from '@emotion/styled';
import Head from 'next/head';

export default function Blog() {
  return (
    <>
      <Head>
        <title>
          Thank you for signing up | Code Gino | Carlo Gino Catapang
        </title>
      </Head>
      <Container>
        <Content>
          <h1>Success🥳</h1>
          <h1>Welcome aboard to my newsletter! 📬</h1>
          <h2>
            To ensure you will receive the latest and greatest updates, please
            confirm your subscription by clicking the link I send in your
            email.📧
          </h2>

          <br />
          <p>Thank you for signing up.🙏</p>
          <p>We&lsquo;ll be in touch soon!👋</p>
        </Content>
      </Container>
    </>
  );
}

const Container = styled.main`
  display: flex;
  align-items: center;
  flex-direction: column;
  min-height: 90vh;
  padding: var(--spacing-medium) 0;
`;

const Content = styled.article`
  text-align: center;
  max-width: 50rem;
`;
