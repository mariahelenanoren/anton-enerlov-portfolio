import { useMediaQuery, useTheme } from '@mui/material';
import { AnimationContainer, PaddingComponent } from '..';
import { IProjectImages } from './types';
import { Image } from 'react-datocms';
import { Masonry } from '@mui/lab';
import { PreviewModal } from '../previewModal';
import { DisableCopy } from '../disableCopy';

export default function ImageGrid({ images }: IProjectImages) {
	const theme = useTheme();
	const mobile = useMediaQuery(theme.breakpoints.only('xs'));

	return (
		<PaddingComponent>
			<Masonry columns={mobile ? 1 : 2} spacing={2}>
				{images.map((image, index) => (
					<AnimationContainer key={index}>
						<PreviewModal image={image}>
							<DisableCopy>
								<Image data={image.responsiveImage} />
							</DisableCopy>
						</PreviewModal>
					</AnimationContainer>
				))}
			</Masonry>
		</PaddingComponent>
	);
}
