import {Viewport} from 'next';
import GlobalEffects from './global-effects';
import {Providers} from './providers';
import {Inter, Roboto} from 'next/font/google';
import {twMerge} from 'tailwind-merge';
import {getLocale} from './i18n/server';
import {LocaleProvider} from './hooks/locale-provider';
import Header from '@/components/header/Header';
import Footer from '@/components/Footer';
import '../../styles/tailwind.css';
import '../styles/animations.css';
import '../styles/custom.css';

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
  const locale = getLocale();
  return (
    <html lang={locale}>
      {/* <head>
        <link
          rel="stylesheet"
          href="https://sdk.birdeatsbug.com/latest/style.css"
        ></link>
      </head> */}
      <body className={twMerge(inter.variable, roboto.variable)}>
        <LocaleProvider value={locale}>
          <Providers>
            <Header />
            {children}
            <Footer />
          </Providers>
        </LocaleProvider>
      </body>
      <GlobalEffects />
    </html>
  );
}
