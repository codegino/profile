import type {AppProps} from 'next/app';
import Footer from '../components/Footer';
import Header from '../components/header/Header';
import '../styles/globals.css';

function MyApp({Component, pageProps}: AppProps) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
export default MyApp;
