import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme: Theme) => ({
  selectedContainer: {
    marginTop: '8rem',
    [theme.breakpoints.only('xs')]: {
      marginTop: '6rem',
    },
  },
  title: {
    marginBottom: '3.5rem',
    [theme.breakpoints.only('xs')]: {
      marginBottom: '2.5rem',
    },
  },
  clientContainer: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    textTransform: 'uppercase',
  },
}));
