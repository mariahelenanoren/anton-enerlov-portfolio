import { ResponsiveImageType } from 'react-datocms';
import { IVideo } from '../../lib/types/video';

export interface IMediaGrid {
  images: {
    responsiveImage: ResponsiveImageType;
  }[];
  videos: IVideo[];
}
