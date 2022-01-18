import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme: Theme) => ({
  aboutContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignContent: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },
  aboutTitle: {
    marginTop: '6rem',
    marginBottom: '3.5rem',
    [theme.breakpoints.only('xs')]: {
      marginTop: '5rem',
      marginBottom: '2.5rem',
    },
  },
  videoContainer: {
    marginTop: '6rem',
    position: 'relative',
    paddingBottom: '56.25%',
    [theme.breakpoints.only('xs')]: {
      marginTop: '5rem',
    },
  },
  video: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    right: 0,
  },
}));
