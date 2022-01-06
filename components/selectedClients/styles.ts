import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme: Theme) => ({
  sectionContainer: {
    marginTop: '8rem',
  },
  title: {
    marginBottom: '4rem',
  },
  clientContainer: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    textTransform: 'uppercase',
  },
}));
