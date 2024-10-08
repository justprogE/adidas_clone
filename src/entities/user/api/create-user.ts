import { USER_ENDPOINT } from '@/shared/api';
import { useMutation } from '@apollo/client';
import { SING_UP_USER } from '../model/create-user-schema';
import { IUser } from '../model/type';

export function createUser() {
  // eslint-disable-next-line
  return useMutation<{
    createUser: { user: IUser; token: string };
  }>(SING_UP_USER, {
    context: { clientName: USER_ENDPOINT },
  });
}
