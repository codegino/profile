import {useEffect} from 'react';
import type {AppProps} from 'next/app';
import {useRouter} from 'next/router';
import useDarkMode from 'use-dark-mode';
import '../../styles/tailwind.css';
import * as ga from '../lib/ga';
import '../styles/_globals.css';
import '../styles/animations.css';

function MyApp({Component, pageProps}: AppProps) {
  const router = useRouter();

  const {value: isDarkMode} = useDarkMode();

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
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
      <Component {...pageProps} />
    </>
  );
}
export default MyApp;
