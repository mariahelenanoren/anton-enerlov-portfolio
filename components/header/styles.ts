import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme: Theme) => ({
  appbar: {
    flexGrow: 1,
    backgroundColor: 'transparent',
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '2rem 0',
  },
  logoContainer: {
    position: 'relative',
    width: '3rem',
    height: '2rem',
  },
  link: {
    marginLeft: '3rem',
    color: theme.palette.common.white,
  },
  active: {
    fontWeight: 600,
  },
}));
