import { ResponsiveImageType } from 'react-datocms';

export interface ILanding {
  landing: {
    title: string;
    subtitle: string;
    socialLinks: ILink[];
    backgroundImage: {
      responsiveImage: ResponsiveImageType;
    };
  };
}

interface ILink {
  link: string;
  icon: {
    responsiveImage: ResponsiveImageType;
  };
}
