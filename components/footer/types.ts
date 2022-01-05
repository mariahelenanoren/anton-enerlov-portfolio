import { ResponsiveImageType } from 'react-datocms';
 
export interface IFooter {
    footer: {
        socialLinks: {
            link: string;
            icon: {
                responsiveImage: ResponsiveImageType;
            };
        } []
    }
  };
  