import { gql } from 'graphql-request';

export const PROJECTS_QUERY = gql`
	query GetProjects($category: String) {
		allProjects(filter: { categoryTitle: { eq: $category } }) {
			id
			title
			categoryTitle
			featuredImage {
				responsiveImage(imgixParams: { auto: format, fit: max, w: 900 }) {
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
		}
	}
`;
