import { gql } from 'graphql-request';

export const OUTDOOR_QUERY = gql`
  {
    outdoorPage {
      projects {
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
  }
`;
