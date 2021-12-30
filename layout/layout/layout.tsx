import React, { PropsWithChildren } from 'react';
import { Header } from '../../components';

export default function Layout({ children }: PropsWithChildren<{}>) {
  return (
    <>
      <Header />
      <div>{children}</div>
    </>
  );
}
