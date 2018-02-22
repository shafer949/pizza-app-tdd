import React from 'react'
import {expect} from 'code';
import {shallow} from 'enzyme';
import {spy} from 'sinon';
import sinon from 'sinon';
import App from './App';
import PizzaList from '../components/PizzaList/pizzaList';
import FilterPizzaInput from '../components/FilterPizza/filterPizzaInput';
import SortPizzaButton from '../components/SortPizza/sortPizzaButton';
import * as fetchServices from '../services/api';
import pizzaTestData from '../store/pizza.json';
import {fetchPizzas} from '../services/api';

const pizzas = pizzaTestData.pizzas;

describe('Given `App`', () => {
    let component, sandbox, fetchPizzasStub, testProps;

    beforeEach(() => {

        sandbox = sinon.createSandbox();

        fetchPizzasStub = sandbox.stub(fetchServices, 'fetchPizzas').resolves({pizzas});

        testProps = {
          fetchPizzas: fetchPizzasStub
        }  
       
        component = shallow(<App {...testProps}/>)
    })
  
    afterEach(() => {
        
        sandbox.restore();
    })

    describe('When `App` is loading', () => {
        
        beforeEach(() => {

            component.setState({ isLoading: true});
        })

        it('should display `Loading...` text', () => {

            expect(component.find('.loading-text').find('p').text()).to.equal("Loading...")
        })
    })

    describe('When the `App` mounts', () => {

    beforeEach(() => {

        component.setState({ isLoading: false});
    })

    it('should be a `div`', () => {

        expect(component.is('div')).to.be.true();
    })

    it('should contain a `WelcomeHeader`', () => {

        expect(component.find('WelcomeHeader').length).to.equal(1);
    })

    it('should contain a `PizzaList`', () => {

        expect(component.find('PizzaList').length).to.equal(1);
    })

    it('should contain a `FilterPizzaInput`', () => {

        expect(component.find('FilterPizzaInput').length).to.equal(1);
    })

    it('should contain a `SortPizzaButton`', () => {

        expect(component.find('SortPizzaButton').length).to.equal(1);
    })

    it('should start with some characters', () => {
    
        expect(component.state().pizzas).to.equal(pizzas);
        
        sinon.assert.calledOnce(fetchPizzasStub);
    })

    it('should contain a `filteredPizzas`', () => {

        expect(component.state().filteredPizzas).to.equal(pizzas);
    })

    describe('When a user enters text into the `FilterPizzaInput`', () => {
      
        it('should update the `filteredPizzaList`', () => {

           component.find('.input-filter').dive().find('input').simulate('change', {target:{value:'Chick'}})

           expect(component.state().filteredPizzas).to.equal(['Chicken']);
        })
    })

    describe('When the `SortPizzaButton` is clicked', () => {

        it('should sort the `filteredPizzaList` in descending alphabetical order', () => {
            
            component.setState({ listAlreadySorted: false});

            component.find('.sort-button').dive().find('button').simulate('click')

            expect(component.state().filteredPizzas[0]).to.be.equal('vegetable');
        })

        it('should sort the `filteredPizzaList` in ascending order', () => {

            component.setState({ listAlreadySorted: true});

            component.find('.sort-button').dive().find('button').simulate('click')

            expect(component.state().filteredPizzas[0]).to.be.equal('3 cheeSe');
        })

        it('should sort the `filteredPizzaList` based on input text entered', () => {
            
            component.find('.input-filter').dive().find('input').simulate('change', {target:{value:'Ch'}})

            component.find('.sort-button').dive().find('button').simulate('click')
           
            expect(component.state().filteredPizzas).to.be.equal(['Chicken', 'Cheese', '3 cheeSe']);
        })
    })
  })
})