import { USER_ENDPOINT } from '@/shared/api';
import { useMutation } from '@apollo/client';
import { IUser } from '../model/type';
import { UPDATE_DETAILS } from '../model/update-user-details';
import { GET_USER } from '../../session/@x/get-user-schema';

export function useUpdateUserDetails() {
  return useMutation<{ user: IUser }>(UPDATE_DETAILS, {
    context: { clientName: USER_ENDPOINT },
    update(cache, { data }) {
      cache.writeQuery({
        query: GET_USER,
        data: {
          user: data?.user,
        },
      });
    },
  });
}
