import React from 'react'
import {expect} from 'code';
import {shallow} from 'enzyme';
import FilterPizzaInput from './filterPizzaInput';
import sinon from 'sinon';

describe('Given `FilterPizzaInput`', () => {
    
    let component,
        testProps,
        inputSpy

    beforeEach(() => {

        inputSpy = sinon.spy();
       
        testProps = {
            onInputChange: inputSpy
        }

        component = shallow(<FilterPizzaInput {...testProps} />)
    })

    it('should be an `input`', () => {

        expect(component.find('input').length).to.equal(1);
    })

    describe('When the `input` value changes', () => {

        it('should call the `onChange` event', () => {

            component.find('input').simulate('change', {target: {value:"Sausage"} });

            expect(inputSpy.calledOnce).to.be.true();
        })
    })
})

