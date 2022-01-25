export interface IProjectVideo {
  video: {
    height: number;
    width: number;
    provider: string;
    providerUid: string;
    thumbnailUrl: string;
    url: string;
  };
  stopPrevention: boolean;
}
