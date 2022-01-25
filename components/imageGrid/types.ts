import { ResponsiveImageType } from 'react-datocms';

export interface IProjectMedia {
	images: {
		responsiveImage: ResponsiveImageType;
	}[];
	videos: {
		video: {
			height: number;
			width: number;
			provider: string;
			providerUid: string;
			thumbnailUrl: string;
			url: string;
		};
	}[];
}
