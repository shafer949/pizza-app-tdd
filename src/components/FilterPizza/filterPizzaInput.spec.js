import React from 'react'
import {expect} from 'code';
import {shallow} from 'enzyme';
import FilterPizzaInput from './filterPizzaInput';
import sinon from 'sinon';

describe('Given `FilterPizzaInput`', () => {
    
    function requiredProps(overrideProps = {}) {

        return {
            ...overrideProps
        }
    }
    
    function renderComponent(props = requiredProps()) {

        return shallow(<FilterPizzaInput {...props}/>)

    }

    it('should be an `input`', () => {

        const component = renderComponent();

        expect(component.find('input').length).to.equal(1);
    })

    describe('When the `input` value changes', () => {

        it('should call the `onChange` event', () => {

            let inputSpy = sinon.spy();

            const component = renderComponent({onInputChange: inputSpy});

            component.find('input').simulate('change', {target: {value:"Sausage"} });

            expect(inputSpy.calledOnce).to.be.true();
        })
    })
})

