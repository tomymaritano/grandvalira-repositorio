const contactRepository = require('../repositories/contact.repository');
const auditService = require('./audit.service');

exports.getContacts = async (options) => {
  return await contactRepository.getContacts(options);
};

<<<<<<< HEAD
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
=======
exports.createContact = async (data) => {
  return await contactRepository.createContact(data);
};

exports.updateContact = async (id, data) => {
  return await contactRepository.updateContact(id, data);
};

exports.banContact = async (id) => {
  return await contactRepository.banContact(id);
>>>>>>> main
};