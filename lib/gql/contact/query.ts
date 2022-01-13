import { gql } from 'graphql-request';

export const CONTACT_DATA = gql`
  {
    contactPage {
      title
      body {
        value
      }
    }
  }
`;
