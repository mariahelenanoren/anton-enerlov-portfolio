import { Close } from '@mui/icons-material';
import { Backdrop, Fade, Modal } from '@mui/material';
import { PropsWithChildren } from 'react';
import { Image } from 'react-datocms';
import { useStyles } from './styles';
import { IPreviewModal } from './types';

export default function PreviewModal({
  children,
  isOpen,
  image,
  handleClose,
  handleClick,
}: PropsWithChildren<IPreviewModal>) {
  const classes = useStyles();

  return (
    <div onClick={handleClick}>
      {children}
      <Modal
        open={isOpen}
        onClose={handleClose}
        className={classes.modal}
        disableAutoFocus={true}
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
      >
        <Fade in={isOpen}>
          <div className={classes.modalContent}>
            <div className={classes.imageContainer}>
              <Image data={image.responsiveImage}></Image>
            </div>
            <Close className={classes.closeIcon} onClick={handleClose} />
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
