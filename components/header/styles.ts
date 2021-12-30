import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme) => ({
  logoContainer: {
    position: 'relative',
    width: '3rem',
    height: '2rem',
  },
  headerContainer: {
    display: 'flex',
    width: '100%',
    padding: '2rem 0 2rem 0',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  menu: {
    display: 'flex',
    '& li': {
      marginLeft: '1rem',
    },
  },
}));
