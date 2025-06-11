const contactsService = require('../services/contacts.service');
const logger = require('../utils/logger');

exports.getContacts = async (req, res) => {
  try {
    const { page, limit, search, status } = req.query;
    const contacts = await contactsService.getContacts({
      page: Number(page) || 1,
      limit: Number(limit) || 10,
      search,
      status,
    });
    res.json(contacts);
  } catch (err) {
    logger.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.createContact = async (req, res) => {
  try {
    const { name, email, phone } = req.body;
    if (!name || !email || !phone) {
      return res.status(400).json({ error: 'Missing required fields' });
    }
    const contact = await contactsService.createContact(req.body);
    res.status(201).json(contact);
  } catch (err) {
    logger.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.updateContact = async (req, res) => {
  try {
    const contact = await contactsService.updateContact(
      req.params.id,
      req.body,
      req.user.id
    );
    res.json(contact);
  } catch (err) {
    logger.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.banContact = async (req, res) => {
  try {
    const contact = await contactsService.banContact(req.params.id, req.user.id);
    res.json(contact);
  } catch (err) {
    logger.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.updateContact = async (req, res) => {
  try {
    const contact = await contactsService.updateContact(req.params.id, req.body);
    res.json(contact);
  } catch (err) {
    logger.error(err);
    if (err.code === 'P2025') {
      return res.status(404).json({ error: 'Contact not found' });
    }
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.banContact = async (req, res) => {
  try {
    const contact = await contactsService.banContact(req.params.id);
    res.json(contact);
  } catch (err) {
    logger.error(err);
    if (err.code === 'P2025') {
      return res.status(404).json({ error: 'Contact not found' });
    }
    res.status(500).json({ error: 'Internal server error' });
  }
};