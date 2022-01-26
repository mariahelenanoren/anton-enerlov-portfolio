import { IResponsiveImage } from './IResponsiveImage';
import { ISocialLink } from './ISocialLink';

export interface ILanding {
  landing: {
    title: string;
    subtitle: string;
    socialLinks: ISocialLink[];
    backgroundImage?: IResponsiveImage;
  };
}
