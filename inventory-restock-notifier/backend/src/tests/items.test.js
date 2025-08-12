const request = require('supertest');
const app = require('../app');

describe('Items Endpoints', () => {
  let authToken;

  beforeAll(async () => {
    const loginRes = await request(app)
      .post('/api/auth/login')
      .send({
        email: 'admin@warehouse.com',
        password: 'password'
      });
    authToken = loginRes.body.token;
  });

  describe('GET /api/items', () => {
    it('should get all items with valid token', async () => {
      const res = await request(app)
        .get('/api/items')
        .set('Authorization', `Bearer ${authToken}`);

      expect(res.statusCode).toBe(200);
      expect(Array.isArray(res.body)).toBe(true);
    });

    it('should reject request without token', async () => {
      const res = await request(app)
        .get('/api/items');

      expect(res.statusCode).toBe(401);
    });
  });

  describe('POST /api/items', () => {
    it('should create a new item', async () => {
      const itemData = {
        name: 'Test Item',
        description: 'Test description',
        quantity: 20,
        threshold: 5,
        category: 'Test'
      };

      const res = await request(app)
        .post('/api/items')
        .set('Authorization', `Bearer ${authToken}`)
        .send(itemData);

      expect(res.statusCode).toBe(201);
      expect(res.body.name).toBe(itemData.name);
    });
  });

  describe('GET /api/items/low-stock', () => {
    it('should get low stock items', async () => {
      const res = await request(app)
        .get('/api/items/low-stock')
        .set('Authorization', `Bearer ${authToken}`);

      expect(res.statusCode).toBe(200);
      expect(Array.isArray(res.body)).toBe(true);
    });
  });
});