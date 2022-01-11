import { StructuredTextDocument } from 'react-datocms';
import { IFooter } from '../../../components/footer/types';

export interface IContact {
  contactPage: {
    title: string;
    body: {
      value: StructuredTextDocument;
    };
  };
}
