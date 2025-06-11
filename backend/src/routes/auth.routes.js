const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth.controller');
const validate = require('../middlewares/validation.middleware');
const { loginSchema } = require('../schemas/auth.schema');

router.post('/login', validate(loginSchema), authController.login);

module.exports = router;