import { StructuredTextDocument } from 'react-datocms';

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
