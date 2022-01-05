import React, { PropsWithChildren } from 'react';
import { Header } from '../../components';
import { useStyles } from './styles';

export default function Layout({ children }: PropsWithChildren<{}>) {
  const classes = useStyles();
  return (
    <>
      <Header />
      <main className={classes.main}>{children}</main>

    </>
  );
}
