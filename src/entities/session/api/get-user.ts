import { USER_ENDPOINT } from '@/shared/api';
import { useQuery } from '@apollo/client';
import { GET_USER } from '../model/get-user-schema';
import { IUser } from '../../user/@x/type';

export function useUserProfile() {
  return useQuery<{ user: IUser }>(GET_USER, {
    context: { clientName: USER_ENDPOINT },
  });
}
