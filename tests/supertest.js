// Import Supertest
const request = require('supertest');

// Import your Express app
const app = require('./app'); // Replace './app' with the path to your Express app file

// Example Jest test using Supertest
test('GET /api/users should return 200', async () => {
  const response = await request(app).get('/api/users');
  expect(response.status).toBe(200);
});
