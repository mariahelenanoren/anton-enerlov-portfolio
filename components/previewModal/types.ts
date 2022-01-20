import { ResponsiveImageType } from 'react-datocms';

export interface IPreviewModal {
  image: {
    responsiveImage: ResponsiveImageType;
  };
  isOpen: boolean;
  handleClose: () => void;
  handleClick: () => void;
}
