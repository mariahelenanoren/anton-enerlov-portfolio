import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme: Theme) => ({
  mansonryContainer: {
    position: 'relative',
    marginTop: '-10rem',
    zIndex: 5,
  },
  imageContainer: {
    cursor: 'pointer',
    position: 'relative',
  },
  overlay: {
    position: 'absolute',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgb(0,0,0,0.4)',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    opacity: 0,
    transition: 'opacity 0.3s',
    zIndex: '1000',

    [theme.breakpoints.up('sm')]: {
      '&:hover': {
        opacity: 1,
      },
    },
  },
  text: {
    textTransform: 'uppercase',
  },
}));
