import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme: Theme) => ({
  root: {
    maxWidth: 2000,
    margin: '0 auto 0 auto',
    padding: '0 8rem 0 8rem',
    [theme.breakpoints.only('md')]: {
      padding: '0 5rem 0 5rem',
    },
    [theme.breakpoints.only('sm')]: {
      padding: '0 3rem 0 3rem',
    },
    [theme.breakpoints.only('xs')]: {
      padding: '0 1.5rem 0 1.5rem',
    },
  },
}));
