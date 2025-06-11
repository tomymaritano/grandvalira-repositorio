const { z } = require('zod')

const createContactSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  phone: z.string().min(1),
  photoUrl: z.string().url().optional(),
})

const updateContactSchema = createContactSchema.partial()

const idParamSchema = z.object({
  id: z.string().uuid(),
})

const getContactsQuerySchema = z.object({
  page: z.string().regex(/^\d+$/).optional(),
  limit: z.string().regex(/^\d+$/).optional(),
  search: z.string().optional(),
  status: z.enum(['ACTIVE', 'BANNED']).optional(),
})

module.exports = {
  createContactSchema,
  updateContactSchema,
  idParamSchema,
  getContactsQuerySchema,
}
