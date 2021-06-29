const {server} = require('../src/server');
const supertest = require('supertest');
const mockRequest = supertest(server);

describe('api server',()=>{
  it('Should return name',async ()=>{
    const query = 'ibrahim';
    const response = await mockRequest.get(`/person?name=${query}`);
    expect(response.body.name).toEqual(query);
    expect(response.status).toBe(200);
  });
  it('Should return name',async ()=>{
    const query = 2;
    const response = await mockRequest.get(`/person?name=${query}`);
    
    expect(response.status).toBe(500);
  });
  it('Should return name',async ()=>{

    const response = await mockRequest.get(`/bad`);
    
    expect(response.status).toBe(404);
  });
});