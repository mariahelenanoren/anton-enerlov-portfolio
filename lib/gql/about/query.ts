import { gql } from 'graphql-request';

export const ABOUTPAGE_QUERY = gql`
	{
		aboutPage {
			title
			video {
				height
				provider
				providerUid
				thumbnailUrl
				title
				url
				width
			}
			body {
				value
			}
			clients {
				name
			}
		}
	}
`;
