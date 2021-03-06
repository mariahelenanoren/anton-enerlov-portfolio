import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme: Theme) => ({
  videoContainer: {
    position: 'relative',
    paddingBottom: '56.25%',
  },
  preventionDiv: {
    zIndex: 10,
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    right: 0,
  },
  projectvideo: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    right: 0,
  },
}));
