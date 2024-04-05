const request = require('supertest');
const app = require('./app');

describe('Test the root path', () => {
  test('It should respond to the GET method with status code 200', async () => {
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(200);
  });

  test('It should respond to the GET method with a form', async () => {
    const response = await request(app).get('/');
    expect(response.text).toContain('<form');
  });

  test('It should respond to the POST method with status code 200', async () => {
    const response = await request(app)
      .post('/submit')
      .send({ data: 'Test data' });
    expect(response.statusCode).toBe(200);
  });

  test('It should respond to the POST method with the submitted data', async () => {
    const testData = 'Test data';
    const response = await request(app)
      .post('/submit')
      .send({ data: testData });
    expect(response.text).toContain(`Data received: ${testData}`);
  });
});
