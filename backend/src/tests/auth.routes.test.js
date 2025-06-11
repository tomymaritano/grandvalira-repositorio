const request = require('supertest');
const app = require('../app');

describe('POST /auth/login', () => {
  it('returns 401 for invalid credentials', async () => {
    const res = await request(app)
      .post('/auth/login')
      .send({ email: 'wrong@example.com', password: 'invalid' });
    expect(res.status).toBe(401);
    expect(res.body).toHaveProperty('error');
  });
});
