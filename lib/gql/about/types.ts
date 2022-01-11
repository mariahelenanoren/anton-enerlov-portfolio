import { StructuredTextDocument } from 'react-datocms';
import { IFooter } from '../../../components/footer/types';

export interface IAbout {
  aboutPage: {
    title: string;
    video: {
      height: number;
      width: number;
      provider: string;
      providerUid: string;
      thumbnailUrl: string;
      url: string;
    };
    body: {
      value: StructuredTextDocument;
    };
    clientTitle: string;
    clientCategory: string;
    clients: {
      name: string;
    }[];
  };
}
