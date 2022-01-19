import React, { PropsWithChildren } from 'react';
import Head from 'next/head';
import { IPage } from './types';
import { ScrollToTop } from '../scrollToTop';

export default function Page({
  children,
  title,
  description,
}: PropsWithChildren<IPage>) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description}></meta>
      </Head>
      <ScrollToTop />
      <>{children}</>
    </>
  );
}
