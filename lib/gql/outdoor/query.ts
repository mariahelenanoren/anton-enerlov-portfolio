import { gql } from 'graphql-request';

export const OUTDOOR_QUERY = gql`
  {
    outdoorPage {
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
