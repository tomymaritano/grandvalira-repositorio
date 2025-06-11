const auditService = require('../services/audit.service');
const logger = require('../utils/logger');

exports.getLogs = async (req, res, next) => {
  try {
    const logs = await auditService.getLogs();
    res.json(logs);
  } catch (err) {
    logger.error(err);
    next(err);
  }
};
