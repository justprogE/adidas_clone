import { useQuery } from '@apollo/client';
import { PRODUCT_ENDPOINT } from '@/shared/api';
import { IProduct } from '../model/types';
import { GET_PRODUCT } from '../model/get-product-schema';

export function useFetchProduct(id: string) {
  return useQuery<{ product: [IProduct] }>(GET_PRODUCT, {
    variables: {
      filter: {
        id,
      },
    },
    context: { clientName: PRODUCT_ENDPOINT },
  });
}
