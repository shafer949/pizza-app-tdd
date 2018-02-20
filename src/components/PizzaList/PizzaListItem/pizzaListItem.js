import React from 'react';
import PropTypes from 'prop-types'

const PizzaListItem = (props) => {
    return (
        <li>
            <p>{props.pizzaType}</p>
        </li>
    )
}

PizzaListItem.propTypes = {
    pizzaType: PropTypes.string.isRequired
}

export default PizzaListItem;
