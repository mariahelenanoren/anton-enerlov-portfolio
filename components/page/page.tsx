import React, { PropsWithChildren, useEffect } from 'react';
import Head from 'next/head';
import { IPage } from './types';
import { useRouter } from 'next/router';

export default function Page({
  children,
  title,
  description,
}: PropsWithChildren<IPage>) {
  const router = useRouter();

  useEffect(() => {
    router.events.on('routeChangeComplete', () => {
      document.body.scroll(0, 0);
    });
  }, [router.events]);

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description}></meta>
      </Head>
      <>{children}</>
    </>
  );
}
