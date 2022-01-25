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
    outline: 'none',
  },
  closeIcon: {
    marginLeft: '0.5rem',
    cursor: 'pointer',
  },
  imageContainer: {
    '& img': {
      width: 'auto !important',
      height: 'auto !important',
      maxWidth: '80vw',
      maxHeight: '85vh',
      objectFit: 'contain',
    },
  },
  videoContainer: {
    width: '80vw',
  },
}));
