import { ISocialLinks } from '../../header/types';

export interface IMobileMenu extends ISocialLinks {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isOpen: boolean;
  pages: {
    title: string;
    href: string;
  }[];
}
