import React from 'react'
import {expect} from 'code';
import {shallow} from 'enzyme';
import SortPizzaButton from './sortPizzaButton';
import sinon from 'sinon';

describe('Given `SortPizzaButton`', () => {
    
    let component,
        testProps,
        buttonSpy

    beforeEach(() => {

        buttonSpy = sinon.spy();
       
        testProps = {
            onSortButtonClick: buttonSpy
        }

        component = shallow(<SortPizzaButton {...testProps} />)
    })

    it('should be a `button`', () => {

        expect(component.find('button').length).to.equal(1);
    })

    describe('When the `button` is clicked', () => {

        it('should call the `onClick` event', () => {

           component.find('button').simulate('click');
            
            expect(buttonSpy.calledOnce).to.be.true();
        })
    })
})