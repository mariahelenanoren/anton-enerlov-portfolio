import { IVideo } from '../../lib/types/video';

export interface IExternalVideo extends IVideo {
  preventPlay: boolean;
}
