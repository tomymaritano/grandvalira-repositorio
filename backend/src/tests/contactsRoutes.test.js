const request = require('supertest');
const app = require('../app');

jest.mock('../middlewares/authenticate.middleware', () => (req, res, next) => next());
jest.mock('../middlewares/authorize.middleware', () => () => (req, res, next) => next());
jest.mock('../services/contacts.service', () => ({
  getContacts: jest.fn(),
  createContact: jest.fn(),
}));

const contactsService = require('../services/contacts.service');

describe('GET /contacts', () => {
  it('returns contacts list', async () => {
    contactsService.getContacts.mockResolvedValue([{ id: 1, name: 'A', email: 'a@example.com' }]);

    const res = await request(app).get('/contacts');

    expect(res.status).toBe(200);
    expect(res.body[0].name).toBe('A');
  });
});

describe('POST /contacts', () => {
  it('creates a contact', async () => {
    contactsService.createContact.mockResolvedValue({ id: 1, name: 'A', email: 'a@example.com' });

    const res = await request(app)
      .post('/contacts')
      .send({ name: 'A', email: 'a@example.com' });

    expect(res.status).toBe(201);
    expect(res.body.name).toBe('A');
  });
});
