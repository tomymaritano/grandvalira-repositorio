const contactRepository = require('../repositories/contact.repository');
const auditService = require('./audit.service');

exports.getContacts = async () => {
  return await contactRepository.getContacts();
};

exports.createContact = async (data, userId) => {
  const contact = await contactRepository.createContact(data);
  await auditService.logAction('CREATE', 'Contact', contact.id, userId);
  return contact;
};

exports.updateContact = async (id, data, userId) => {
  const contact = await contactRepository.updateContact(id, data);
  await auditService.logAction('UPDATE', 'Contact', contact.id, userId);
  return contact;
};

exports.banContact = async (id, userId) => {
  const contact = await contactRepository.updateContact(id, { status: 'BANNED' });
  await auditService.logAction('BAN', 'Contact', contact.id, userId);
  return contact;
};