import { gql } from '@apollo/client';

export const UPDATE_EMAIL = gql`
  mutation updateEmail($where: UpdateEmailType) {
    user: updateUserEmail(where: $where) {
      ...UserFields
    }
  }
`;
