const express = require('express');
const router = express.Router();

/**
 * @swagger
 * /audit-log/test:
 *   get:
 *     summary: Ruta de prueba para el log de auditoría
 *     responses:
 *       200:
 *         description: Respuesta de prueba
 */

router.get('/test', (req, res) => {
  res.json({ message: 'Audit log route works' });
});

module.exports = router;