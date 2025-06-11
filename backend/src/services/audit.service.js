const auditRepository = require('../repositories/audit.repository');

exports.logAction = async (action, entity, entityId, changedById) => {
  return await auditRepository.createLog({ action, entity, entityId, changedById });
};

exports.getLogs = async () => {
  return await auditRepository.getLogs();
};
