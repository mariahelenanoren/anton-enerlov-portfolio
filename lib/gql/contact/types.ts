import { StructuredTextDocument } from 'react-datocms';
import { IFooter } from '../../../components/footer/types';

export interface IContactPage extends IFooter {
	contactPage: {
		title: string;
		body: {
			value: StructuredTextDocument;
		};
	};
}
