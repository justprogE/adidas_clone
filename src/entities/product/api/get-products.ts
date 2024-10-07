import { useQuery } from '@apollo/client';
import { PRODUCT_ENDPOINT } from '@/shared/api';
import type { IProduct } from '../model/types';
import { GET_PRODUCTS } from '../model/get-products-schema';

export function useFetchProducts(filter?: object) {
  return useQuery<{ products: IProduct[] }>(GET_PRODUCTS, {
    variables: {
      filter: { ...filter },
    },
    context: { clientName: PRODUCT_ENDPOINT },
  });
}
