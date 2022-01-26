import { IResponsiveImage, IVideo } from '../../lib/types';

export interface IMediaGrid {
  images: IResponsiveImage[];
  videos: {
    video: IVideo;
  }[];
}
