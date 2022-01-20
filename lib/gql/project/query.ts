import { gql } from 'graphql-request';

export const PROJECT_QUERY = gql`
	query GetProject($title: String!) {
		allProjects(
			filter: { title: { matches: { pattern: $title, caseSensitive: false } } }
		) {
			id
			title
			categoryTitle
			featuredImage {
				responsiveImage(imgixParams: { q: 90 }) {
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
				responsiveImage(imgixParams: { q: 90 }) {
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
			product {
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
