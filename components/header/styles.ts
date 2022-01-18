import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme: Theme) => ({
  appbar: {
    flexGrow: 1,
    padding: '1rem 0',
    zIndex: 10,
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: 0,
  },
  logoContainer: {
    zIndex: 10,
    position: 'relative',
    width: '3rem',
    height: '2rem',
    [theme.breakpoints.only('xs')]: {
      width: '2.5rem',
      height: '2rem',
    },
  },
}));
