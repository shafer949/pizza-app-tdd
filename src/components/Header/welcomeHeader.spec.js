
import React from 'react'
import {expect} from 'code';
import {shallow} from 'enzyme';
import WelcomeHeader from './welcomeHeader';

describe('Given `WelcomeHeader`', () => {
    let component, testProps

    beforeEach(() => {

        testProps = Object.freeze({
            text: 'Pizza'
      })
      
      component = shallow(<WelcomeHeader {...testProps}/>)
    })

    it('should be a `div`',() => {

        expect(component.is('div')).to.be.true();
    })

})