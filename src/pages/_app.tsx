import {useEffect} from 'react';
import type {AppProps} from 'next/app';
import {useRouter} from 'next/router';
import Footer from '../components/Footer';
import Header from '../components/header/Header';
import * as ga from '../lib/ga';
import '../styles/animations.css';
import '../styles/globals.css';

function MyApp({Component, pageProps}: AppProps) {
  const router = useRouter();

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
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
export default MyApp;
