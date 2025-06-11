const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

exports.getUserByEmail = (email) => {
  return prisma.user.findUnique({
    where: { email },
  });
};