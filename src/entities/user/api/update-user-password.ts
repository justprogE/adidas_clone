import { USER_ENDPOINT } from '@/shared/api';
import { useMutation } from '@apollo/client';
import { IUser } from '../model/type';
import { UPDATE_PASSWORD } from '../model/update-user-password';
import { GET_USER } from '../../session/@x/get-user-schema';

export function useUpdateUserPassword() {
  return useMutation<{ user: IUser }>(UPDATE_PASSWORD, {
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
