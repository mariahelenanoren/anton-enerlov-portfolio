import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme: Theme) => ({
  aboutContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignContent: 'center',
    justifyContent: 'center',
    padding: '8rem 0',
    textAlign: 'center',
  },
  textContainer: {
    marginTop: '6rem',
    fontSize: 16,
    lineHeight: '170%',
    [theme.breakpoints.only('xs')]: {
      fontSize: 14,
    },
  },
  videoContainer: {
    marginTop: '8rem',
    position: 'relative',
    paddingBottom: '56.25%',
  },
  video: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    right: 0,
  },
}));
