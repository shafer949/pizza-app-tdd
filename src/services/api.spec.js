import sinon from 'sinon';
import {expect} from 'code';
import {fetchPizzas} from './api';
import 'isomorphic-fetch';

describe('fetchPizzas', () => {
    let sandbox, fetchPizzasStub;

    beforeEach(() => {

        sandbox = sinon.createSandbox();

        fetchPizzasStub = sandbox.stub(global, 'fetch').resolves({json:sinon.spy()});
    })
    
    afterEach(() => {

        sandbox.restore();
    })

    it('should make a request and be called with a specific endpoint', () => {
        
        const endpoint = './src/store/pizza.json';
        
        fetchPizzas();

        sinon.assert.calledOnce(fetchPizzasStub);

        sinon.assert.calledWithExactly(fetchPizzasStub, endpoint);
    })
})