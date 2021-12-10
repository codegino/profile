import React from 'react';
import {extractCritical} from '@emotion/server';
import Document, {Html, Head, Main, NextScript} from 'next/document';
import type {DocumentContext} from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    const critical = extractCritical(initialProps.html);
    initialProps.html = critical.html;
    initialProps.styles = (
      <React.Fragment>
        {initialProps.styles}
        <style
          data-emotion-css={critical.ids.join(' ')}
          dangerouslySetInnerHTML={{__html: critical.css}}
        />
      </React.Fragment>
    );

    return initialProps;
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta
            name="google-site-verification"
            content={`${process.env.NEXT_PUBLIC_GOOOGLE_SITE_VERIFICATION}`}
          />
          <meta name="twitter:site" content="@code_gino" />
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
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"
            rel="stylesheet"
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
