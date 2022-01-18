import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme: Theme) => ({
  infoContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    margin: '4rem 0',
    [theme.breakpoints.only('xs')]: {
      margin: '3rem 0',
    },
  },
  info: {
    width: 300,
    margin: '2rem auto',
    textAlign: 'center',
    [theme.breakpoints.only('xs')]: {
      margin: '0.5rem auto',
    },
  },
  name: {
    marginBottom: '1rem',
  },
}));
