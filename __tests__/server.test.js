const {server} = require('../src/server');
const supertest = require('supertest');
const mockRequest = supertest(server);

describe('api server',()=>{
  it('Should return type',async ()=>{
    const query = 'ibrahim';
    const response = await mockRequest.get(`/person?name=${query}`);
    expect(response.body.name).toEqual(query);
    expect(response.status).toBe(200);
  });
});