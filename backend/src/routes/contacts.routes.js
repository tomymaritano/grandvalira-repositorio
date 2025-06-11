const express = require('express');
const authenticate = require('../middlewares/authenticate');
const authorize = require('../middlewares/authorize.middleware');
const contactsController = require('../controllers/contacts.controller');
const validate = require('../middlewares/validation.middleware');
const audit = require('../middlewares/audit.middleware');
const { createContactSchema } = require('../schemas/contact.schema');

const router = express.Router();

router.get(
  '/',
  authenticate,
  authorize(['USER', 'MODERATOR', 'ADMIN']),
  contactsController.getContacts
);

router.post(
  '/',
  authenticate,
  authorize(['MODERATOR', 'ADMIN']),
  validate(createContactSchema),
  audit('CREATE', 'Contact'),
  contactsController.createContact
);

router.put(
  '/:id',
  authenticate,
  authorize(['MODERATOR', 'ADMIN']),
  audit('UPDATE', 'Contact'),
  contactsController.updateContact
);

router.patch(
  '/:id/ban',
  authenticate,
  authorize(['MODERATOR', 'ADMIN']),
  audit('BAN', 'Contact'),
  contactsController.banContact
);

module.exports = router;