import { PropsWithChildren, useState } from 'react';
import { Close } from '@mui/icons-material';
import { Backdrop, Fade, Modal } from '@mui/material';
import { Image } from 'react-datocms';
import { IPreviewModal } from './types';
import { useStyles } from './styles';
import { DisableCopy } from '../disableCopy';

export default function PreviewModal({
	children,
	image,
}: PropsWithChildren<IPreviewModal>) {
	const classes = useStyles();
	const [isOpen, setIsOpen] = useState(false);

	const handleCloseModal = () => {
		setIsOpen(false);
	};
	const handleOpenModal = () => {
		if (!isOpen) {
			setIsOpen(true);
		}
	};

	return (
		<div className={classes.previewModal} onClick={handleOpenModal}>
			{children}
			<Modal
				open={isOpen}
				onClose={handleCloseModal}
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
							<DisableCopy>
								<Image data={image.responsiveImage}></Image>
							</DisableCopy>
						</div>
						<Close className={classes.closeIcon} onClick={handleCloseModal} />
					</div>
				</Fade>
			</Modal>
		</div>
	);
}
