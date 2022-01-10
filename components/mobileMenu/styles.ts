import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme: Theme) => ({
  modal: {
    transition: 'opacity 0.3s',
    backgroundColor: 'rgb(0,0,0,0.8)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 5,
  },
  openModal: {
    opacity: 1,
  },
  closedModal: {
    opacity: 0,
  },
  button: {
    zIndex: 10,
  },
  buttonIcon: {
    fontSize: 28,
  },
  menuContainer: {
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
  },
  link: {
    marginBottom: '2.5rem',
    color: theme.palette.common.white,
  },
  active: {
    fontWeight: 600,
  },
  inActive: {
    fontWeight: 300,
  },
  socialContainer: {
    position: 'absolute',
    bottom: '6rem',
    display: 'flex',
  },
  iconLink: {
    margin: '0 0.8rem',
  },
  icon: {
    height: 'auto',
    width: '1.5rem',
  },
}));
