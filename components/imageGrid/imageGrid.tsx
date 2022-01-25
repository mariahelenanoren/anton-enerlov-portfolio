import { useMediaQuery, useTheme } from '@mui/material';
import { AnimationContainer, PaddingComponent } from '..';
import { IProjectMedia } from './types';
import { Image } from 'react-datocms';
import { Masonry } from '@mui/lab';
import { PreviewModal } from '../previewModal';
import { DisableCopy } from '../disableCopy';
import { ProjectVideo } from '../projectVideos';

export default function ImageGrid({ images, videos }: IProjectMedia) {
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
				{videos.map((video, index) => (
					<AnimationContainer key={index}>
						<ProjectVideo video={video.video} />
					</AnimationContainer>
				))}
			</Masonry>
		</PaddingComponent>
	);
}
