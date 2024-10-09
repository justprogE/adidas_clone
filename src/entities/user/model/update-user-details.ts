import { gql } from '@apollo/client';

export const UPDATE_DETAILS = gql`
  mutation updateDetails($where: UpdateDetailsType) {
    user: updateUserDetails(where: $where) {
      ...UserFields
    }
  }
`;
