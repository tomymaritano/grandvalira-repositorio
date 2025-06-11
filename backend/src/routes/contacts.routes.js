const express = require('express');
const authenticate = require('../middlewares/authenticate.middleware');
const authorize = require('../middlewares/authorize.middleware');
const contactsController = require('../controllers/contacts.controller');

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
  contactsController.createContact
);

module.exports = router;