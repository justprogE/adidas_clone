import { useMutation } from '@apollo/client';
import { USER_ENDPOINT } from '@/shared/api';
import { IUser } from '@/entities/user/@x/type';
import { UPDATE_CART } from '../model/add-item-cart-schema';
import { GET_USER } from '../../session/@x/get-user-schema';

export function useUpdateCart() {
  return useMutation<{ user: IUser }>(UPDATE_CART, {
    update(cache, { data }) {
      const { user } = cache.readQuery({
        query: GET_USER,
      }) as { user: IUser };

      cache.writeQuery({
        query: GET_USER,
        data: {
          user: {
            ...user,
            cart: data?.user,
          },
        },
      });
    },
    context: { clientName: USER_ENDPOINT },
  });
}
