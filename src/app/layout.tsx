import { Viewport } from 'next';
import GlobalEffects from './global-effects';

export const viewport: Viewport = {
  themeColor: [
    {
      media: '(prefers-color-scheme: light)',
      color: 'white',
    },
    {
      media: '(prefers-color-scheme: dark)',
      color: 'black',
    },
  ],
}

export const metadata = {
  metadataBase: new URL(process.env.CNAME as string),
  verification: {
    google: process.env.NEXT_PUBLIC_GOOOGLE_SITE_VERIFICATION,
  },
  authors: [
    {
      name: 'Carlo Gino Catapang',
    },
  ],
  keywords: [
    'React',
    'React Native',
    'Javascript',
    'Typescript',
    'Remix',
    'NodeJS',
    'HTML',
    'CSS',
  ],

};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://sdk.birdeatsbug.com/latest/style.css"
        ></link>
      </head>
      <body>{children}</body>
      <GlobalEffects />
    </html>
  );
}
