import Head from 'next/head';

export default function Blog() {
  return (
    <>
      <Head>
        <title>
          Thank you for signing up | Code Gino | Carlo Gino Catapang
        </title>
      </Head>

      <main className="flex items-center flex-col py-12 mb-64">
        <article className="text-center max-w-3xl">
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
        </article>
      </main>
    </>
  );
}
