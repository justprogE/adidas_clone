import { gql } from '@apollo/client';

export const GET_USER = gql`
  query getUserData {
    user: getUser {
      ...UserFields
    }
  }
`;
