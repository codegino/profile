import {Viewport} from 'next';
import GlobalEffects from './global-effects';
import {Providers} from './providers';
import {Inter, Roboto} from 'next/font/google';
import {twMerge} from 'tailwind-merge';

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
};

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

const inter = Inter({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-inter',
});

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-roboto',
});

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://sdk.birdeatsbug.com/latest/style.css"
        ></link>
      </head>
      <body className={twMerge(inter.variable, roboto.variable)}>
        <Providers>{children}</Providers>
      </body>
      <GlobalEffects />
    </html>
  );
}
