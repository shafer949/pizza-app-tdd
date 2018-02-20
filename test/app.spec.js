import React from 'react'
import {expect} from 'code';
import {shallow} from 'enzyme';
import {spy} from 'sinon';
import sinon from 'sinon';
import App from '../src/containers/app';
import PizzaList from '../src/components/PizzaList/pizzaList';
import FilterPizzaInput from '../src/components/FilterPizza/filterPizzaInput';
import SortPizzaButton from '../src/components/SortPizza/sortPizzaButton';
import * as fetchServices from '../src/services/api';
import pizzaTestData from '../src/store/pizza.json';
import {fetchPizzas} from '../src/services/api';

const pizzas = pizzaTestData.pizzas;

describe('Given `App`', () => {
    let component, sandbox, fetchPizzasStub, testProps, inputSpy, buttonSpy;

    beforeEach(() => {

        sandbox = sinon.createSandbox();

        fetchPizzasStub = sandbox.stub(fetchServices, 'fetchPizzas').resolves({pizzas});
        inputSpy = sandbox.spy();
        buttonSpy = sandbox.spy();

        testProps = {
          fetchPizzas: fetchPizzasStub,
          handleInputChange: inputSpy,
          handleSortButtonClick: buttonSpy
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

            expect(component.find('LoadingView').exists()).to.be.true();

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

           inputSpy(component.instance().handleInputChange('Chick'));

           expect(component.state().filteredPizzas).to.equal(['Chicken']);
        })
    })

    describe('When the `SortPizzaButton` is clicked', () => {

        it('should call the `handleSortButtonClick` event', () => {

            buttonSpy(component.instance().handleSortButtonClick());
            
            expect(buttonSpy.calledOnce).to.be.true();
        })

        it('should sort the `filteredPizzaList` in reverse alphabetical order', () => {
            
            buttonSpy(component.instance().handleSortButtonClick());

            expect(component.state().filteredPizzas[0]).to.be.equal('vegetable');
        })

        it('should sort the `filteredPizzaList` based on input text entered', () => {
            
            inputSpy(component.instance().handleInputChange('Ch'));

            buttonSpy(component.instance().handleSortButtonClick());
           
            expect(component.state().filteredPizzas).to.be.equal(['Chicken', 'Cheese', '3 cheeSe']);
        })
    })
  })
})