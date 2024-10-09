import { z } from 'zod';

export const DetailsSchema = z.object({
  firstName: z.string().min(1, 'Please enter your first name'),
  lastName: z.string().min(1, 'Please enter your last name'),
  month: z.string().min(1, 'Incorrect month').max(2, 'Incorrect month'),
  day: z.string().min(1, 'Incorrect day').max(2, 'Incorrect day'),
  year: z.string().min(4, 'Incorrect year').max(4, 'Incorrect year'),
});

export type DetailsSchemaType = z.infer<typeof DetailsSchema>;
