import { z } from 'zod';

export const DetailsPasswordSchema = z.object({
  oldPassword: z.string().min(1, { message: 'Please enter your old password' }),
  newPassword: z.string().min(1, { message: 'Please enter your new password' }),
});

export type DetailsPasswordSchemaType = z.infer<typeof DetailsPasswordSchema>;
