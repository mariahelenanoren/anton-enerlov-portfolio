import { gql } from 'graphql-request';

export const LIFESTYLE_QUERY = gql`
  {
    lifestylePage {
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
