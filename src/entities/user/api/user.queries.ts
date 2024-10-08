import { createUser } from './create-user';
import { useUserProfile } from './get-user';
import { useLogOut } from './logout-user';
import { useUpdateUserDetails } from './update-user-details';
import { useUpdateUserEmail } from './update-user-email';
import { useUpdateUserPassword } from './update-user-password';

export const userQueries = {
  create: () => createUser(),
  get: () => useUserProfile(),
  updateDetails: () => useUpdateUserDetails(),
  updateEmail: () => useUpdateUserEmail(),
  updatePassword: () => useUpdateUserPassword(),
  logout: () => useLogOut(),
};
