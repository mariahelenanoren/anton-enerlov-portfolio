import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme: Theme) => ({
  textContainer: {
    width: '100%',
    maxWidth: '45rem',
    marginRight: 'auto',
    marginLeft: 'auto',
    textAlign: 'center',
    '& p': {
      margin: 0,
      fontSize: 18,
      lineHeight: '170%',
      [theme.breakpoints.only('xs')]: {
        fontSize: 16,
      },
    },
    '& a': {
      textDecoration: 'underline',
    },
  },
}));
