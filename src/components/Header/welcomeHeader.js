import React from 'react';
import PropTypes from 'prop-types';

const WelcomeHeader = (props) => {
    return (
        <div>
           <p>{props.text}</p>
        </div>
       );    
}

WelcomeHeader.defaultProps = {
    text: 'Pizza Galore'
}

WelcomeHeader.propTypes = {
    text: PropTypes.string.isRequired
}

export default WelcomeHeader;