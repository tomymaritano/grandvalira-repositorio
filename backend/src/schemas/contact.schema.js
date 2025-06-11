const { z } = require('zod');

const createContactSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  phone: z.string().min(1),
  photoUrl: z.string().url().optional(),
});

module.exports = { createContactSchema };
