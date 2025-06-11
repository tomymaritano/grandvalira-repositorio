const contactsService = require('../services/contacts.service');
const logger = require('../utils/logger');

exports.getContacts = async (req, res) => {
  try {
    const contacts = await contactsService.getContacts();
    res.json(contacts);
  } catch (err) {
    logger.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.createContact = async (req, res) => {
  try {
    const contact = await contactsService.createContact(req.body, req.user.id);
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