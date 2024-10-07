import { useFetchProduct } from './get-product';
import { useFetchProducts } from './get-products';

export const productsQueries = {
  product: (id: string) => useFetchProduct(id),
  products: (filter?: object) => useFetchProducts(filter),
};
