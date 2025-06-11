const express = require('express');

/**
 * @swagger
 * /contacts:
 *   get:
 *     summary: Obtener todos los contactos
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de contactos
 *   post:
 *     summary: Crear un contacto
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *     responses:
 *       201:
 *         description: Contacto creado
 */
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