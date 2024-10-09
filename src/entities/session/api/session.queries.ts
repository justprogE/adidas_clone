import { createUser } from './create-user';
import { useDeleteUser } from './delete-user';
import { useUserProfile } from './get-user';
import { useLogOut } from './logout-user';

export const sessionQueries = {
  create: () => createUser(),
  get: () => useUserProfile(),
  delete: () => useDeleteUser(),
  logout: () => useLogOut(),
};
