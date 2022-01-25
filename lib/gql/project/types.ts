import { ResponsiveImageType } from 'react-datocms';
import { IProjectVideo } from '../../../components/projectVideos/types';

export interface IProject {
	id: string;
	title: string;
	categoryTitle: string;
	featuredImage: {
		responsiveImage: ResponsiveImageType;
	};
	images: {
		responsiveImage: ResponsiveImageType;
	}[];
	client: {
		name?: string;
	}[];
	product: {
		name?: string;
	}[];
	productionCompany: {
		name?: string;
	}[];
	model: {
		name?: string;
	}[];
	producer: {
		name?: string;
	}[];
	agency: {
		name?: string;
	}[];
	retouch: {
		name?: string;
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
