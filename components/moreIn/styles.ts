import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme: Theme) => ({
  sectionContainer: {
    textAlign: 'center',
  },
  grid: {
    position: 'relative',
  },
  title: {
    marginBottom: '4rem',
  },
  image: {
    width: '100%',
    height: '20rem',
    '& img': {
      objectFit: 'cover',
      objectPosition: 'center',
    },
  },
  overlay: {
    position: 'absolute',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: 'rgb(0,0,0,0.4)',
    textTransform: 'uppercase',
  },
}));
