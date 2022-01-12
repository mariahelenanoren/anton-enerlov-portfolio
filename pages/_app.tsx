import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import type { AppProps } from 'next/app';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from '../styles/theme/theme';
import { Loader } from '../components';
import '../styles/globals.css';
import Head from 'next/head';

export default function MyApp({ Component, pageProps }: AppProps) {
  const [loading, SetLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    router.events.on('routeChangeStart', (url) => {
      SetLoading(true);
    });

    router.events.on('routeChangeComplete', (url) => {
      SetLoading(false);
    });
  }, [router.events]);

  return (
    <>
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        ></link>
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        ></link>
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        ></link>
        <link rel="manifest" href="/site.webmanifest"></link>
        <link
          rel="mask-icon"
          href="/safari-pinned-tab.svg"
          color="#5bbad5"
        ></link>
        <meta name="msapplication-TileColor" content="#2b5797"></meta>
        <meta name="theme-color" content="#ffffff"></meta>
      </Head>
      <ThemeProvider theme={theme}>
        {loading ? <Loader /> : <Component {...pageProps} />}
      </ThemeProvider>
    </>
  );
}
