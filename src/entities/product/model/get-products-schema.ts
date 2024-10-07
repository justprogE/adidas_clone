import { gql } from '@apollo/client';

export const GET_PRODUCTS = gql`
  query allMenShoes($filter: DatumFilter) {
    products: allData(filter: $filter) {
      id
      title
      style
      color
      price
      images
      description
      discount
      members
    }
  }
`;
