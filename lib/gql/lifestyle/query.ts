import { gql } from 'graphql-request';

export const LIFESTYLE_QUERY = gql`
  {
    lifestylePage {
      projects {
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
        videos {
          video {
            height
            width
            provider
            providerUid
            thumbnailUrl
            title
            url
          }
        }
      }
    }
  }
`;
