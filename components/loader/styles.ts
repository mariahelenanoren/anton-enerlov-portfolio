import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme: Theme) => ({
  loaderContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    width: '100%',
  },
}));
