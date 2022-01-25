import { useMediaQuery, useTheme } from '@mui/material';
import { AnimationContainer, PaddingComponent } from '..';
import { IProjectMedia } from './types';
import { Image as DatoImage } from 'react-datocms';
import Image from 'next/image';
import { Masonry } from '@mui/lab';
import { PreviewModal } from '../previewModal';
import { DisableCopy } from '../disableCopy';
import { ProjectVideo } from '../projectVideos';
import { useStyles } from './styles';

export default function ImageGrid({ images, videos }: IProjectMedia) {
	const theme = useTheme();
	const classes = useStyles();
	const mobile = useMediaQuery(theme.breakpoints.only('xs'));

	return (
		<PaddingComponent>
			<Masonry columns={mobile ? 1 : 2} spacing={2}>
				{images.map((image, index) => (
					<AnimationContainer key={index}>
						<PreviewModal image={image}>
							<DisableCopy>
								<DatoImage data={image.responsiveImage} />
							</DisableCopy>
						</PreviewModal>
					</AnimationContainer>
				))}
				{videos.map((video, index) => (
					<AnimationContainer key={index}>
						<PreviewModal video={video.video}>
							<ProjectVideo video={video.video} />
						</PreviewModal>
					</AnimationContainer>
				))}
			</Masonry>
		</PaddingComponent>
	);
}
