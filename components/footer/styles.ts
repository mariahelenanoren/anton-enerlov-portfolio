import { Theme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme: Theme) => ({
  footer: {
    width: '100%',
    marginTop: '6rem',
    marginBottom: '2rem',
  },
  logo: {
    position: 'relative',
    width: '3rem',
    height: '2rem',
    [theme.breakpoints.only('xs')]: {
      width: '2.5rem',
      height: '2rem',
    },
  },
  iconsContainer: {
    margin: '1rem 0',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  link: {
    margin: '0 0.8rem',
    [theme.breakpoints.only('xs')]: {
      margin: '0 0.5rem',
    },
  },
  socialIcons: {
    height: 'auto',
    width: '1.5rem',
  },
  column: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
}));
