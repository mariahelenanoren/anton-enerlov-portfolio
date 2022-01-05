import React, { PropsWithChildren } from 'react';
import { useStyles } from './styles';

export default function TextContainer({ children }: PropsWithChildren<{}>) {
  const classes = useStyles();

  return <div className={classes.textContainer}>{children}</div>;
}
