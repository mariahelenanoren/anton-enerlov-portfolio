import { gql } from 'graphql-request';

export const FOOTER_DATA = gql`
  {
    footer {
      socialLinks {
        link
        icon {
          responsiveImage(
            imgixParams: { auto: format, fit: max, w: 32, h: 32 }
          ) {
            srcSet
            webpSrcSet
            sizes
            src
            width
            height
            aspectRatio
            alt
            title
            base64
          }
        }
      }
    }
  }
`;
