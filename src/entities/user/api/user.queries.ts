import { createUser } from './create-user';
import { useUserProfile } from './get-user';

export const userQueries = {
  create: () => createUser(),
  get: () => useUserProfile(),
};
