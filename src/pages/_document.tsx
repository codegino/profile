import Document, {Html, Head, Main, NextScript} from 'next/document';
import type {DocumentContext} from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return {...initialProps};
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta
            name="google-site-verification"
            content={`${process.env.NEXT_PUBLIC_GOOOGLE_SITE_VERIFICATION}`}
          />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:creator" content="@codegino" />
          <meta name="twitter:site" content="@codegino" />
          <meta name="author" content="Carlo Gino Catapang" />
          <meta
            name="keywords"
            content="React,React Native,Javascript,Typescript,Remix,NodeJS,HTML,CSS"
          />
          <meta
            name="theme-color"
            media="(prefers-color-scheme: light)"
            content="white"
          />
          <meta
            name="theme-color"
            media="(prefers-color-scheme: dark)"
            content="black"
          />
          <link
            rel="stylesheet"
            href="https://sdk.birdeatsbug.com/latest/style.css"
          ></link>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
