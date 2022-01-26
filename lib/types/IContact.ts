import { IStructuredText } from './IStructuredText';

export interface IContact {
  contactPage: {
    title: string;
    body: IStructuredText;
  };
}
