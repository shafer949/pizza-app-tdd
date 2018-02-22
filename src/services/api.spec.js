import sinon from 'sinon';
import {expect} from 'code';
import {fetchPizzas} from './api';
import 'isomorphic-fetch';
import pizzaTestData from '../../src/store/pizza.json';

const pizzas = pizzaTestData.pizzas;

describe('fetchPizzas', () => {
    let sandbox, fetchPizzasStub;

    beforeEach(() => {

        sandbox = sinon.createSandbox();

        const json = sinon.stub().returns(pizzas);

        fetchPizzasStub = sandbox.stub(global, 'fetch').resolves({json});
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

    it('should return an array of pizzas', () => {
     
        fetchPizzas().then(data => {
            expect(data).array().equal(pizzas)
        })
    })
})