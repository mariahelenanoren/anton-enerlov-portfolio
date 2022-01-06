import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import type { AppProps } from 'next/app';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from '../styles/theme/theme';
import { Layout } from '../layout/layout';
import { Loader } from '../components';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
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
      <Layout footer={pageProps.footer}>
        {loading ? <Loader /> : <Component {...pageProps} />}
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
