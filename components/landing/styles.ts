import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme: Theme) => ({
  absolute: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
  },
  relative: {
    height: '40rem',
    position: 'relative',
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
    backgroundColor: 'rgba(0, 0, 0, 0.49)',
    top: '-6rem',
    right: 0,
    left: 0,
    bottom: 0,
  },
  contentContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    height: '100%',
  },
  iconContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  link: {
    margin: '0 0.8rem',
  },
  icon: {
    height: 'auto',
    width: '1.5rem',
  },
}));
