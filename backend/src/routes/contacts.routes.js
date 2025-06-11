const express = require('express')
const authenticate = require('../middlewares/authenticate')
const authorize = require('../middlewares/authorize.middleware')
const contactsController = require('../controllers/contacts.controller')
const validate = require('../middlewares/validation.middleware')
const audit = require('../middlewares/audit.middleware')
const {
  createContactSchema,
  updateContactSchema,
  idParamSchema,
  getContactsQuerySchema,
} = require('../schemas/contact.schema')

const router = express.Router()

router.get(
  '/',
  authenticate,
  authorize(['USER', 'MODERATOR', 'ADMIN']),
  validate(getContactsQuerySchema, 'query'),
  contactsController.getContacts,
)

router.post(
  '/',
  authenticate,
  authorize(['MODERATOR', 'ADMIN']),
  validate(createContactSchema),
  audit('CREATE', 'CONTACT'),
  contactsController.createContact,
)

router.put(
  '/:id',
  authenticate,
  authorize(['MODERATOR', 'ADMIN']),
  validate(idParamSchema, 'params'),
  validate(updateContactSchema),
  audit('UPDATE', 'CONTACT'),
  contactsController.updateContact,
)

router.patch(
  '/:id/ban',
  authenticate,
  authorize(['MODERATOR', 'ADMIN']),
  validate(idParamSchema, 'params'),
  audit('BAN', 'CONTACT'),
  contactsController.banContact,
)

router.delete(
  '/:id',
  authenticate,
  authorize(['MODERATOR', 'ADMIN']),
  validate(idParamSchema, 'params'),
  contactsController.deleteContact,
)

module.exports = router
