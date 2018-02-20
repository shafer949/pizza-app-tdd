import React from 'react';
import PropTypes from 'prop-types';

const WelcomeHeader = (props) => {
    return (
        <div>
           {props.text}
        </div>
       );    
}

WelcomeHeader.propTypes = {
    text: PropTypes.string.isRequired
}

export default WelcomeHeader;