import { useMediaQuery, useTheme } from '@mui/material';
import { AnimationContainer } from '../animationContainer';
import { PaddingComponent } from '../paddingComponent';
import { IMediaGrid } from './types';
import { Image as DatoImage } from 'react-datocms';
import { Masonry } from '@mui/lab';
import { PreviewModal } from '../previewModal';
import { DisableCopy } from '../disableCopy';
import { ExternalVideo } from '../externalVideo';

export default function MediaGrid({ images, videos }: IMediaGrid) {
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.only('xs'));
  console.log(videos);

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
              <ExternalVideo preventPlay={true} video={video.video} />
            </PreviewModal>
          </AnimationContainer>
        ))}
      </Masonry>
    </PaddingComponent>
  );
}
