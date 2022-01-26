import { IMeta } from './IMeta';
import { IResponsiveImage } from './IResponsiveImage';
import { IVideo } from './IVideo';

export interface IProject extends IMeta {
  id: string;
  title: string;
  categoryTitle: string;
  featuredImage: IResponsiveImage;
  images: IResponsiveImage[];
  videos: {
    video: IVideo;
  }[];
}
