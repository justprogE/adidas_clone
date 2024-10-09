import { useUpdateUserDetails } from './update-user-details';
import { useUpdateUserEmail } from './update-user-email';
import { useUpdateUserPassword } from './update-user-password';

export const userQueries = {
  updateDetails: () => useUpdateUserDetails(),
  updateEmail: () => useUpdateUserEmail(),
  updatePassword: () => useUpdateUserPassword(),
};
