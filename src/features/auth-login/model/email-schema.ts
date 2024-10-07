import { z } from 'zod';

export const EmailSchema = z.object({
  email: z
    .string()
    .min(1, { message: 'Please enter a valid e-mail address' })
    .email({ message: 'Please enter a valid e-mail address' }),
  logged: z.boolean(),
});

export type EmailSchemaType = z.infer<typeof EmailSchema>;
