const request = require('supertest');
const app = require('../app');

jest.mock('../services/auth.service', () => ({
  login: jest.fn(),
}));

const authService = require('../services/auth.service');

describe('POST /auth/login', () => {
  it('returns token when credentials are valid', async () => {
    authService.login.mockResolvedValue('token123');

    const res = await request(app)
      .post('/auth/login')
      .send({ email: 'test@example.com', password: 'pass' });

    expect(res.status).toBe(200);
    expect(res.body.token).toBe('token123');
  });

  it('returns 401 when service throws error', async () => {
    authService.login.mockRejectedValue(new Error('Invalid'));

    const res = await request(app)
      .post('/auth/login')
      .send({ email: 'bad@example.com', password: 'bad' });

    expect(res.status).toBe(401);
    expect(res.body.error).toBeDefined();
  });
});
