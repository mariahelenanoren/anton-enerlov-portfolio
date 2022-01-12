import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme: Theme) => ({
  infoContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    padding: '4rem 0',
  },
  info: {
    width: 300,
    margin: '2rem 0',
    marginLeft: 'auto',
    marginRight: 'auto',
    textAlign: 'center',
  },
  name: {
    marginBottom: '1rem',
  },
}));
