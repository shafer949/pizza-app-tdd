import React from 'react'
import {expect} from 'code';
import {shallow} from 'enzyme';
import PizzaListItem from './pizzaListItem';

describe('Given `PizzaListItem`', () => {
   
    const mockPizza = 'Sausage';

    function requiredProps(overrideProps = {}) {

        return {
            pizzaType: mockPizza,
            ...overrideProps
        }
    }
    
    function renderComponent(props = requiredProps()) {

        return shallow(<PizzaListItem {...props}/>)

    }

    it('should be an `li`', () => {

        const component = renderComponent();

        expect(component.type()).to.equal('li');
    })

    it('should contain a paragraph tag', () => {

        const component = renderComponent();

        expect(component.find('p').length).to.equal(1);
    })

    it('should contain text in the paragraph tag', () => {

        const component = renderComponent();

        expect(component.find('p').text()).to.equal(mockPizza);
    })
})