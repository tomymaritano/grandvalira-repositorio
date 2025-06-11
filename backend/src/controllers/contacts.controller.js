const contactsService = require('../services/contacts.service')
const logger = require('../utils/logger')

exports.getContacts = async (req, res, next) => {
  try {
    const { page, limit, search, status } = req.query;

    // 🚀 Agregás este console.log para ver a qué DB está conectado Prisma:
    console.log('DATABASE_URL:', process.env.DATABASE_URL);

    const contacts = await contactsService.getContacts({
      page: Number(page) || 1,
      limit: Number(limit) || 10,
      search,
      status,
    });

    res.json(contacts);
  } catch (err) {
    logger.error(err);
    next(err);
  }
};

exports.createContact = async (req, res, next) => {
  try {
    const { name, email, phone } = req.body
    if (!name || !email || !phone) {
      return res.status(400).json({ error: 'Missing required fields' })
    }
    const contact = await contactsService.createContact(req.body)
    res.status(201).json(contact)
  } catch (err) {
    logger.error(err)
    next(err)
  }
}


exports.updateContact = async (req, res, next) => {
  try {
    const contact = await contactsService.updateContact(req.params.id, req.body)
    res.json(contact)
  } catch (err) {
    logger.error(err)
    if (err.code === 'P2025') {
      return res.status(404).json({ error: 'Contact not found' })
    }
    next(err)
  }
}

exports.banContact = async (req, res, next) => {
  try {
    const contact = await contactsService.banContact(req.params.id)
    res.json(contact)
  } catch (err) {
    logger.error(err)
    if (err.code === 'P2025') {
      return res.status(404).json({ error: 'Contact not found' })
    }
    next(err)
  }
}

exports.deleteContact = async (req, res, next) => {
  try {
    await contactsService.deleteContact(req.params.id)
    res.status(204).end()
  } catch (err) {
    logger.error(err)
    if (err.code === 'P2025') {
      return res.status(404).json({ error: 'Contact not found' })
    }
    next(err)
  }
}

module.exports = {
  getContacts: exports.getContacts,
  createContact: exports.createContact,
  updateContact: exports.updateContact,
  banContact: exports.banContact,
  deleteContact: exports.deleteContact,
};
