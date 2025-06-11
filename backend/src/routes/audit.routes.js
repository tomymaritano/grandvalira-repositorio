const express = require('express');
const authenticate = require('../middlewares/authenticate.middleware');
const authorize = require('../middlewares/authorize.middleware');
const auditController = require('../controllers/audit.controller');

const router = express.Router();

router.get(
  '/',
  authenticate,
  authorize(['ADMIN']),
  auditController.getLogs
);

module.exports = router;
