import React, { PropsWithChildren } from 'react';
import { useStyles } from './styles';

export default function PaddingComponent({ children }: PropsWithChildren<{}>) {
  const classes = useStyles();

  return <div className={classes.root}>{children}</div>;
}
