import React, { PropsWithChildren } from 'react';
import { Footer, Header } from '../../components';
import { IFooter } from '../../components/footer/types';
import { useStyles } from './styles';

export default function Layout({
  children,
  footer,
}: PropsWithChildren<IFooter>) {
  const classes = useStyles();
  return (
    <>
      <Header />
      <main className={classes.main}>{children}</main>
      <Footer footer={footer} />
    </>
  );
}
