import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from 'next/document';

const metaDescription =
  'Anne Mariel Recio. Web Developer, Software Developer, Software Engineer, Frontend Engineer. React, JavaScript, TypeScript expert. Husband and Father.';

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
          <link rel="icon" href="/favicon.ico" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;400;700&display=swap"
            rel="stylesheet"
          />
          <meta property="og:url" content="https://carlogino.cc" />
          <meta property="og:type" content="Website" />
          <meta property="og:title" content="Anne Mariel Recio" />
          <meta name="twitter:card" content="summary" />
          <meta name="description" content={metaDescription} />
          <meta property="og:description" content={metaDescription} />
          <meta property="og:image" content="/preview.png" />
          <meta name="author" content="Anne Mariel Recio" />
          <meta
            name="keywords"
            content="React,React Native,Javascript,Typescript,NodeJS,HTML,CSS,ReactJS,React.js"
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
          {/* Global Site Tag (gtag.js) - Google Analytics */}
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
              page_path: window.location.pathname,
            });
          `,
            }}
          />
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
