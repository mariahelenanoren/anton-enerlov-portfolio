import { ResponsiveImageType } from 'react-datocms';

export interface IPreviewModal {
	image?: {
		responsiveImage: ResponsiveImageType;
	};
	video?: {
		height: number;
		width: number;
		provider: string;
		providerUid: string;
		thumbnailUrl: string;
		url: string;
	};
}
