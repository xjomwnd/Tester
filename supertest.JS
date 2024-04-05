// Import Supertest
const request = require('supertest');

// Import your Express app
const app = require('./app');

// Example Jest test using Supertest
test('submit test form', async () => {
  // Mock the response from the backend server
  const mockResponse = { success: true };
  jest.spyOn(axios, 'post').mockResolvedValueOnce({ data: mockResponse });

  // Use Supertest to make a POST request to your server
  const response = await request(app)
    .post('/submit')
    .send({ testName: 'Test', testScore: '100' });

  // Assertions
  expect(response.status).toBe(200);
  expect(response.body).toEqual(mockResponse);
});
