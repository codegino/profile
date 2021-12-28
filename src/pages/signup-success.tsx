import Head from 'next/head';

export default function Blog() {
  return (
    <>
      <Head>
        <title>Thank you for signing up</title>
        <meta name="robots" content="noindex"></meta>
      </Head>
      <main className="flex items-center flex-col min-h-[80vh] py-8">
        <article className="textc max-w-2xl">
          <h1>Success🥳</h1>
          <h2>Welcome aboard to my newsletter! 📬</h2>

          <br />
          <h3 className="text-center">Thank you for signing up.🙏</h3>
          <h4 className="text-center">We&lsquo;ll be in touch soon!👋</h4>
        </article>
      </main>
    </>
  );
}
