const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

exports.getContacts = async () => {
  return await prisma.contact.findMany();
};

exports.createContact = async (data) => {
  return await prisma.contact.create({
    data,
  });
};