import { ResponsiveImageType } from 'react-datocms';
import { IVideo } from '../../types/video';
export interface IProject {
  id: string;
  title: string;
  categoryTitle: string;
  featuredImage: {
    responsiveImage: ResponsiveImageType;
  };
  images: {
    responsiveImage: ResponsiveImageType;
  }[];
  client: {
    name?: string;
  }[];
  product: {
    name?: string;
  }[];
  productionCompany: {
    name?: string;
  }[];
  model: {
    name?: string;
  }[];
  producer: {
    name?: string;
  }[];
  agency: {
    name?: string;
  }[];
  retouch: {
    name?: string;
  }[];
  videos: IVideo[];
}
