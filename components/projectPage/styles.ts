import { Theme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme: Theme) => ({
  projectContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  titleContainer: {
    marginTop: '6rem',
    marginBottom: '3.5rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    [theme.breakpoints.only('xs')]: {
      marginTop: '5rem',
      marginBottom: '2.5rem',
    },
  },
  firstImage: {
    width: '100%',
    minWidth: '100vw',
  },
}));
