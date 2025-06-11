const auditService = require('../services/audit.service');
const logger = require('../utils/logger');

exports.getLogs = async (req, res) => {
  try {
    const logs = await auditService.getLogs();
    res.json(logs);
  } catch (err) {
    logger.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
};
