import Head from 'next/head';
import '../styles/globals.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <link rel='shortcut icon' href='/favicon_logo.ico' />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
