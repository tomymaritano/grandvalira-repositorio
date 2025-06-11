const contactRepository = require('../repositories/contact.repository')

exports.getContacts = async (options) => {
  return await contactRepository.getContacts(options)
}

exports.createContact = async (data) => {
  return await contactRepository.createContact(data)
}

exports.updateContact = async (id, data) => {
  return await contactRepository.updateContact(id, data)
}

exports.banContact = async (id) => {
  return await contactRepository.banContact(id)
}
