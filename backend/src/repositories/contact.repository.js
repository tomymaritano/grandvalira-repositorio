const prisma = require('../lib/prisma'); // ✅ esto es la instancia singleton

exports.getContacts = async ({ page = 1, limit = 10, search, status } = {}) => {
  const where = {};

  // Filtro por search
  if (search) {
    where.OR = [
      { name: { contains: search, mode: 'insensitive' } },
      { email: { contains: search, mode: 'insensitive' } },
    ];
  }

  // Filtro por status (solo si es válido)
  const validStatuses = ['ACTIVE', 'BANNED'];
  if (typeof status === 'string' && validStatuses.includes(status)) {
    where.status = status;
  }

  const skip = (page - 1) * limit;

  return await prisma.contact.findMany({
    where,
    skip,
    take: limit,
    orderBy: { createdAt: 'desc' }, // 👉 opcional: orden más predecible
  });
};

exports.createContact = async (data) => {
  return await prisma.contact.create({
    data,
  });
};

exports.updateContact = async (id, data) => {
  return await prisma.contact.update({
    where: { id },
    data,
  });
};

exports.banContact = async (id) => {
  return await prisma.contact.update({
    where: { id },
    data: { status: 'BANNED' },
  });
};

exports.deleteContact = async (id) => {
  return await prisma.contact.delete({
    where: { id },
  });
};