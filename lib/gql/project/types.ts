import { ResponsiveImageType } from 'react-datocms';
import { IFooter } from '../../../components/footer/types';

export interface IProjectPage extends IFooter {
	project: {
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
	};
}
