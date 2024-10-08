import { z } from 'zod';

export const PasswordSchema = z.object({
  password: z.string().min(1, { message: 'Please enter a password' }),
});

export type PasswordSchemaType = z.infer<typeof PasswordSchema>;
