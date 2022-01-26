import React, { PropsWithChildren, useEffect } from 'react';
import Head from 'next/head';
import { IPage } from './types';
import { useRouter } from 'next/router';

export default function Page({
  children,
  title,
  description,
  imageUrl,
  imageWidth,
  imageHeight,
  twitterCard,
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
        <meta name="description" content={description} />

        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={imageUrl} />
        <meta property="og:image:width" content={imageWidth.toString()} />
        <meta property="og:image:height" content={imageHeight.toString()} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Anton Enerlöv" />

        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={imageUrl} />
        <meta name="twitter:card" content={twitterCard} />
      </Head>
      <>{children}</>
    </>
  );
}
