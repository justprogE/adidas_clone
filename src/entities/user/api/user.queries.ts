import { createUser } from './create-user';
import { useUserProfile } from './get-user';
import { useUpdateUserDetails } from './update-user-details';
import { useUpdateUserEmail } from './update-user-email';

export const userQueries = {
  create: () => createUser(),
  get: () => useUserProfile(),
  updateDetails: () => useUpdateUserDetails(),
  updateEmail: () => useUpdateUserEmail(),
};
