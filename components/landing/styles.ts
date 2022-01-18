import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme: Theme) => ({
  landingInner: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
  },
  landingContainer: {
    height: '100vh',
    position: 'relative',
    [theme.breakpoints.only('xs')]: {
      height: 380,
    },
  },
  imageContainer: {
    position: 'absolute',
    top: '-6rem',
    right: 0,
    left: 0,
    bottom: 0,
  },
  image: {
    width: '100%',
    height: '100%',
    '& img': {
      height: '100%',
      width: '100%',
      objectFit: 'cover',
    },
  },
  overlay: {
    position: 'absolute',
    backgroundColor: 'rgba(0, 0, 0, 0.35)',
    top: '-6rem',
    right: 0,
    left: 0,
    bottom: 0,
  },
  gradient: {
    position: 'absolute',
    background: 'linear-gradient(rgba(0,0,0,0), rgba(0,0,0,1))',
    right: 0,
    left: 0,
    bottom: 0,
    height: '10rem',
    zIndex: 5,
  },
  contentContainer: {
    marginTop: '-6rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    height: '100%',
  },
  iconContainer: {
    marginTop: '1rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    [theme.breakpoints.only('xs')]: {
      marginTop: '0.5rem',
    },
  },
  link: {
    margin: '0 0.8rem',
  },
  icon: {
    height: 'auto',
    width: '1.5rem',
  },
}));
