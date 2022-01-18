import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme: Theme) => ({
  sectionContainer: {
    textAlign: 'center',
    marginTop: '10rem',
  },
  itemContent: {
    position: 'relative',
    width: '100%',
    height: '20rem',
    '& img': {
      transition: 'transform 0.5s !important',
    },
    '&:hover': {
      '& img': {
        transform: 'scale(1.1)',
      },
    },
  },
  title: {
    marginBottom: '4rem',
  },
  image: {
    height: '100%',
    width: '100%',
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
    cursor: 'pointer',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: 'rgb(0,0,0,0.4)',
    transition: 'background 0.5s',
    '&:hover': {
      backgroundColor: 'rgb(0,0,0,0.6)',
    },
  },
  projectTitle: {
    textTransform: 'uppercase',
  },
}));
