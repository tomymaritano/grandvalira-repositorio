import { z } from 'zod';

export const contactSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  phone: z.string().min(1),
  photoUrl: z.string().url().optional(),
});

export type ContactInput = z.infer<typeof contactSchema>;
