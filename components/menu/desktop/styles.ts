import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme: Theme) => ({
  link: {
    marginLeft: '3rem',
    color: theme.palette.common.white,
  },
  active: {
    fontWeight: 600,
  },
}));
