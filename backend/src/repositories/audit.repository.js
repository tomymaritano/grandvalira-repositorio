const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

exports.createLog = async (data) => {
  return await prisma.auditLog.create({ data });
};

exports.getLogs = async () => {
  return await prisma.auditLog.findMany({ orderBy: { timestamp: 'desc' } });
};
