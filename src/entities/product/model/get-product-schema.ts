import { gql } from '@apollo/client';

export const GET_PRODUCT = gql`
  query allMenShoes($filter: DatumFilter) {
    product: allData(filter: $filter) {
      id
      title
      style
      color
      price
      images
      category
      description
    }
  }
`;
