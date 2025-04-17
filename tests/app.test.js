const request = require('supertest');
const { app, server } = require('../app');

describe('API Tests', () => {
  afterAll(() => {
    server.close(); // <--- cierra el servidor después de las pruebas
  });

  it('should return a list of users', async () => {
    const res = await request(app).get('/users');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveLength(2);
  });

  it('should return a single user', async () => {
    const res = await request(app).get('/users/1');
    expect(res.statusCode).toEqual(200);
    expect(res.body.name).toEqual('Alice');
  });
});
