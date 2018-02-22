
import React from 'react'
import {expect} from 'code';
import {shallow} from 'enzyme';
import WelcomeHeader from './welcomeHeader';

describe('Given `WelcomeHeader`', () => {

    function requiredProps(overrideProps = {}) {

        return {
            text: 'Pizza',
            ...overrideProps
        }
    }
    
    function renderComponent(props = requiredProps()) {

        return shallow(<WelcomeHeader {...props}/>)

    }

    it('should be a `div`',() => {

        const component = renderComponent();

        expect(component.is('div')).to.be.true();
    })

    it('should contain a paragraph tag', () => {

        const component = renderComponent();

        expect(component.find('p').length).to.equal(1);
    })

    it('should contain text in the paragraph tag', () => {

        const component = renderComponent();

        expect(component.find('p').text()).to.equal('Pizza');
    })
})