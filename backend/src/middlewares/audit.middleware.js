const auditService = require('../services/audit.service');
const logger = require('../utils/logger');

module.exports = (action, entity) => {
  return (req, res, next) => {
    const originalJson = res.json.bind(res);
    res.json = async (data) => {
      try {
        const entityId = data && data.id ? data.id : req.params.id;
        const userId = req.user && req.user.id;
        if (entityId && userId) {
          await auditService.logAction(action, entity, entityId, userId);
        }
      } catch (err) {
        logger.error(err);
      }
      return originalJson(data);
    };
    next();
  };
};
