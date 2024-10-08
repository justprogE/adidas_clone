import { USER_ENDPOINT } from '@/shared/api';
import { useMutation } from '@apollo/client';
import { DELETE_USER } from '../model/delete-user-schema';

export function useDeleteUser() {
  return useMutation<{ message: string }>(DELETE_USER, {
    context: { clientName: USER_ENDPOINT },
  });
}
