import React from 'react'
import {expect} from 'code';
import {shallow} from 'enzyme';
import SortPizzaButton from './sortPizzaButton';
import sinon from 'sinon';

describe('Given `SortPizzaButton`', () => {

    const requiredProps = (overrideProps  = {}) => {
    
        return {
            ...overrideProps
        }
    }
    
    const renderComponent = (props = requiredProps()) => {
    
        return shallow(<SortPizzaButton {...props} />)
        
    }

    it('should be a `button`', () => {

        const component = renderComponent();

        expect(component.find('button').length).to.equal(1);
    })

    describe('When the `button` is clicked', () => {

        it('should call the `onClick` event', () => {

            let buttonSpy = sinon.spy();
       
            const component = renderComponent({ onSortButtonClick: buttonSpy});

            component.find('button').simulate('click');
            
            expect(buttonSpy.calledOnce).to.be.true();
        })
    })
})