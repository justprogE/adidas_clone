import { USER_ENDPOINT } from '@/shared/api';
import { useMutation } from '@apollo/client';
import { LOGOUT_USER } from '../model/logout-user-schema';

export function useLogOut() {
  return useMutation<{ message: string }>(LOGOUT_USER, {
    context: { clientName: USER_ENDPOINT },
  });
}
