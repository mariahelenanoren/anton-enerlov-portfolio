import { Theme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme: Theme) => ({
  previewModal: {
    cursor: 'pointer',
  },
  modal: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    position: 'relative',
    display: 'flex',
    alignItems: 'flex-start',
  },
  closeIcon: {
    marginLeft: '0.5rem',
  },
  imageContainer: {
    '& img': {
      maxWidth: '80vw',
      maxHeight: '80vh',
      objectFit: 'contain',
    },
  },
}));
