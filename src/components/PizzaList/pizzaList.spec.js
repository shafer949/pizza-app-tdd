import React from 'react'
import {expect} from 'code';
import {shallow} from 'enzyme';
import PizzaList from './pizzaList';
import pizzaTestData from '../../../src/store/pizza.json';
import sinon from 'sinon';

const pizzas = pizzaTestData.pizzas;

describe('Given `PizzaList`', () => {
   
    const requiredProps = (overrideProps  = {}) => {
    
        return {
            pizzas,
            ...overrideProps
        }
    }
    
    const renderComponent = (props = requiredProps()) => {
    
        return shallow(<PizzaList {...props} />)
        
    }

    it('should be a `ul`', () => {

        const component = renderComponent();

        expect(component.find('ul').length).to.equal(1);
    })

    
    describe('When there are pizzas passed in', () => {

        it('should have the same number of list items', () => {

            const component = renderComponent();
           
            expect(component.find('PizzaListItem').length).to.equal(pizzas.length);
            
        })

    })
})