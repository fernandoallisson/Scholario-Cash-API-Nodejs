/* eslint-disable max-lines-per-function */
const chai = require('chai');
const chaiHttp = require('chai-http');
const sinon = require('sinon');

const app = require('../../src/app');
const connection = require('../../src/db/connection');

const { expect, use } = chai;

use(chaiHttp);

const peopleList = [
  {
    id: 1,
    firstName: 'Luke',
    lastName: 'Skywalker',
    email: 'luke.skywalker@trybe.com',
    phone: '851 678 4453',
  },
  {
    id: 2,
    firstName: 'Dart',
    lastName: 'Vader',
    email: 'dart.vader@trybe.com',
    phone: '851 678 5665',
  },
];

describe('Testando endpoints de people', () => { 
  it('Testando o cadastro da pessoa', async () => {
    sinon.stub(connection, 'execute').resolves([{ insertId: 12 }]);
    const response = await chai
      .request(app).post('/people').send(
        { firstName: 'Fernando',
          lastName: 'Santos',
          email: 'fernandosantos@mail.com',
          phone: '81 998979931' },
      );
      expect(response.status).to.equal(201);
      expect(response.body).to.deep.equal(
        { message: 'Pessoa cadastrada com sucesso com id 12.' },
      );
  });

  it('Testando a listagem de todas as pessoas', async () => { 
    sinon.stub(connection, 'execute').resolves([peopleList]);

    const response = await chai.request(app).get('/people');

    expect(response.status).to.equal(200);
    expect(response.body).to.deep.equal(peopleList);
  });

  it('Testando a listagem de pessoas pelo ID', async () => {
    sinon.stub(connection, 'execute').resolves([[peopleList[0]]]);

    const response = await chai.request(app).get('/people/1');

    expect(response.status).to.equal(200);
    expect(response.body).to.deep.equal(peopleList[0]);
  });
  afterEach(sinon.restore);
});