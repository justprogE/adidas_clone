import { gql } from '@apollo/client';

export const UPDATE_CART = gql`
  mutation updateUserCart($where: UpdateCartType) {
    user: updateUserCart(where: $where) {
      ...UserFields
      cart {
        productId
        size
        quantity
      }
    }
  }
`;
