import { useFetchProducts } from './get-products';

export const productsQueries = {
  products: (filter?: object) => useFetchProducts(filter),
};
