import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme: Theme) => ({
  aboutContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignContent: 'center',
    justifyContent: 'center',
    padding: '6rem 0',
    textAlign: 'center',
  },
  textContainer: {
    marginTop: '4rem',
  },
  videoContainer: {
    margin: '8rem 0',
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
