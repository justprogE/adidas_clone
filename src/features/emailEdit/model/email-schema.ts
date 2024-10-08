import { z } from 'zod';

export const DetailsEmailSchema = z.object({
  email: z
    .string()
    .min(1, { message: 'Please enter a valid e-mail address' })
    .email({ message: 'Please enter a valid e-mail address' }),
});

export type DetailsEmailSchemaType = z.infer<typeof DetailsEmailSchema>;
