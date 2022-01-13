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
    <ThemeProvider theme={theme}>
      {loading ? <Loader /> : <Component {...pageProps} />}
    </ThemeProvider>
  );
}
