import { gql } from 'graphql-request';

export const SEO_QUERY = gql`
  {
    _site {
      globalSeo {
        fallbackSeo {
          title
          description
          image {
            url
            width
            height
          }
          twitterCard
        }
      }
    }
  }
`;
