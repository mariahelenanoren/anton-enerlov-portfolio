import React from 'react';
import { CircularProgress } from '@mui/material';
import { useStyles } from './styles';

export default function Loader() {
  const classes = useStyles();
  return (
    <div className={classes.loaderContainer}>
      <CircularProgress />
    </div>
  );
}
