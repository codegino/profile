import {useEffect} from 'react';
import type {AppProps} from 'next/app';
import {useRouter} from 'next/router';
import Script from 'next/script';
import useDarkMode from 'use-dark-mode';
import '../../styles/tailwind.css';
import Footer from '../components/Footer';
import Header from '../components/header/Header';
import * as ga from '../lib/ga';
import '../styles/_globals.css';
import '../styles/animations.css';
import '../styles/custom.css';

function MyApp({Component, pageProps}: AppProps) {
  const router = useRouter();

  const {value: isDarkMode} = useDarkMode();

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  useEffect(() => {
    if (process.env.NODE_ENV === 'production') {
      const handleRouteChange = (url: string) => {
        ga.pageview(url);
      };
      //When the component is mounted, subscribe to router changes
      //and log those page views
      router.events.on('routeChangeComplete', handleRouteChange);

      // If the component is unmounted, unsubscribe
      // from the event with the `off` method
      return () => {
        router.events.off('routeChangeComplete', handleRouteChange);
      };
    }
  }, [router.events]);

  return (
    <>
      {/* Global Site Tag (gtag.js) - Google Analytics */}
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
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
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
export default MyApp;
