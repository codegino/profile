import {useEffect} from 'react';
import {appWithTranslation} from 'next-i18next';
import type {AppProps} from 'next/app';
import TagManager from 'react-gtm-module';
import useDarkMode from 'use-dark-mode';
import '../../styles/tailwind.css';
import Footer from '../components/Footer';
import Header from '../components/header/Header';
import '../styles/_globals.css';
import '../styles/animations.css';
import '../styles/custom.css';

function MyApp({Component, pageProps}: AppProps) {
  const {value: isDarkMode} = useDarkMode();

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  // Google Tag Manager
  useEffect(() => {
    if (process.env.NODE_ENV === 'production') {
      TagManager.initialize({gtmId: process.env.NEXT_PUBLIC_GTM as string});
    }
  }, []);

  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
export default appWithTranslation(MyApp);
