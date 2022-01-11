import { gql } from 'graphql-request';

export const PROJECTS_QUERY = gql`
  query GetProjects($category: String) {
    allProjects(filter: { categoryTitle: { eq: $category } }) {
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
