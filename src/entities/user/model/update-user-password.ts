import { gql } from '@apollo/client';

export const UPDATE_PASSWORD = gql`
  mutation updatePassword($where: UpdatePasswordType) {
    user: updateUserPassword(where: $where) {
      ...UserFields
    }
  }
`;
