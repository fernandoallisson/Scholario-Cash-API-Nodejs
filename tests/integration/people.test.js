const chai = require('chai');
const chaiHttp = require('chai-http');
const sinon = require('sinon');

const app = require('../../src/app');
const connection = require('../../src/db/connection')

const { expect, use } = chai;

use(chaiHttp)

describe('Testando endpoints de people', () => { 
  it('Testando o cadastro da pessoa', async() => {
    sinon.stub(connection, 'execute').resolves([{insertId: 12}])

    const response = await chai
      .request(app)
      .post('/people')
      .send(
        {
          firstName: "Fernando",
          lastName: "Santos",
          email: "fernandosantos@mail.com",
          phone: "81 998979931",
        }
      )

      expect(response.status).to.equal(201)
      expect(response.body).to.deep.equal(
        { message: "Pessoa cadastrada com sucesso com id 12."}
      )
  })

  afterEach(sinon.restore);
})