import { gql } from 'graphql-request';

export const LANDING_QUERY = gql`
  {
    landing {
      title
      subtitle
      socialLinks {
        link
        icon {
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
      }
      backgroundImage {
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
    }
  }
`;
