import { IVideo } from './IVideo';
import { IClients } from './IClients';
import { IStructuredText } from './IStructuredText';

export interface IAbout {
  aboutPage: IAboutPage;
}

interface IAboutPage extends IClients {
  title: string;
  video: IVideo;
  body: IStructuredText;
}
