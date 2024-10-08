import { gql } from '@apollo/client';

export const SING_UP_USER = gql`
  mutation registerUser($where: CreateUserType) {
    createUser(where: $where) {
      user {
        ...UserFields
        cart {
          productId
          size
          quantity
        }
      }
      token
    }
  }
`;
