const chai = require('chai');
const rewire = require('rewire');
const expect = chai.expect;
const chaiAsPromised = require('chai-as-promised');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
chai.use(chaiAsPromised);
chai.use(sinonChai);

const mongoose = require('mongoose');

const customers = rewire('./customers.js');
const CustomerModel = require('../models/Customer');

const sandbox = sinon.createSandbox();

describe('customers', () => {
  let findStub;
  let sampleCustomer;

  beforeEach(() => {
    sampleCustomer = {
      name: 'Alexis',
      lastName: 'Villegas',
      dateOfBirth: '1985-01-11T00:00:00.000Z',
      email: 'alexisvt@gmail.com',
      phoneNumber: '87665118',
    };
    findStub = sandbox.stub(mongoose.Model, 'find').resolves([sampleCustomer]);
  });

  afterEach(() => {
    sandbox.restore();
    const customers = rewire('./customers.js');
  });

  context('get', () => {
    it('should return all customers', async () => {
      const results = await customers.get();

      expect(results).to.deep.equal([sampleCustomer]);
    });
  });

  context('create customer', () => {
    let FakeCustomerClass, saveStub, result;

    beforeEach(async () => {
      saveStub = sandbox.stub().resolves(sampleCustomer);
      FakeCustomerClass = sandbox.stub().returns({ save: saveStub });

      customers.__set__('Customer', FakeCustomerClass);
      result = await customers.create(sampleCustomer);
    });

    it('should save the customer', () => {
      expect(saveStub).to.have.been.called;
    });

    it('should call User with new', () => {
      expect(FakeCustomerClass).to.have.been.calledWithNew;
      expect(FakeCustomerClass).to.have.been.calledWith(sampleCustomer);
    });
  });
});
