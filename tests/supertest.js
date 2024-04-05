/// Import the necessary modules
const request = require('supertest');
const app = require('../app'); // Import your Express app

// Example test using Jest
test('GET /api/users should return 200', async () => {
  const response = await request(app).get('/api/users');
  expect(response.status).toBe(200);
});

