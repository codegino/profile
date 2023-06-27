import Head from 'next/head';
import GlobalEffects from './global-effects';

export const metadata = {
  title: 'TODO: // Update this title',
  description: 'TODO: // Update this description',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
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
      <body>{children}</body>
      <GlobalEffects />
    </html>
  );
}
