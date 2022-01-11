import { gql } from 'graphql-request';

export const PROJECT_QUERY = gql`
	query GetProject($id: ItemId) {
		allProjects(filter: { id: { eq: $id } }) {
			id
			title
			categoryTitle
			featuredImage {
				responsiveImage {
					alt
					aspectRatio
					base64
					bgColor
					height
					width
					sizes
					src
					srcSet
					title
					webpSrcSet
				}
			}
			images {
				responsiveImage {
					alt
					aspectRatio
					base64
					bgColor
					height
					width
					sizes
					src
					srcSet
					title
					webpSrcSet
				}
			}
			client {
				name
			}
			productionCompany {
				name
			}
			model {
				name
			}
			producer {
				name
			}
			agency {
				name
			}
			retouch {
				name
			}
		}
	}
`;
