import { USER_ENDPOINT } from '@/shared/api';
import { useMutation } from '@apollo/client';
import { IUser } from '../model/type';
import { UPDATE_EMAIL } from '../model/update-user-email';
import { GET_USER } from '../../session/@x/get-user-schema';

export function useUpdateUserEmail() {
  return useMutation<{ user: IUser }>(UPDATE_EMAIL, {
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
