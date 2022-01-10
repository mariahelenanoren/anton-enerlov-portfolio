import { ResponsiveImageType } from 'react-datocms';

export interface ISocialLinks {
  socialLinks: {
    link: string;
    icon: {
      responsiveImage: ResponsiveImageType;
    };
  }[];
}
