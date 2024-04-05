const request = require('supertest');
const app = require('./app');

describe('Test the root path', () => {
  test('It should respond to the GET method with status code 200', async () => {
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(200);
  });

  test('It should respond to the GET method with a JSON message', async () => {
    const response = await request(app).get('/');
    expect(response.headers['content-type']).toMatch(/json/);
  });

  test('It should respond to the GET method with the correct message', async () => {
    const response = await request(app).get('/');
    expect(response.body.message).toBe('Hello, world!');
  });
});
