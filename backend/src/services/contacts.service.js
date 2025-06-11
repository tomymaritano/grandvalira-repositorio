const contactRepository = require('../repositories/contact.repository');

exports.getContacts = async () => {
  return await contactRepository.getContacts();
};

exports.createContact = async (data) => {
  return await contactRepository.createContact(data);
};