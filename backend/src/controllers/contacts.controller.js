const contactsService = require('../services/contacts.service');

exports.getContacts = async (req, res) => {
  try {
    const contacts = await contactsService.getContacts();
    res.json(contacts);
  } catch (err) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.createContact = async (req, res) => {
  try {
    const contact = await contactsService.createContact(req.body);
    res.status(201).json(contact);
  } catch (err) {
    res.status(500).json({ error: 'Internal server error' });
  }
};