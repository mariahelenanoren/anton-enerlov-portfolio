import { Theme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme: Theme) => ({
  contactTitle: {
    marginTop: '6rem',
    marginBottom: '3.5rem',
    [theme.breakpoints.only('xs')]: {
      marginTop: '5rem',
      marginBottom: '2.5rem',
    },
  },
}));
