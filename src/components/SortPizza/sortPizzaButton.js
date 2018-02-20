import React from 'react'
import PropTypes from 'prop-types'

const SortPizzaButton = (props) => {
    return (
        <div>
            <button onClick={props.onSortButtonClick}>Sort</button>
        </div>
    )
}

SortPizzaButton.propTypes = {
    onSortButtonClick : PropTypes.func.isRequired
}

export default SortPizzaButton;
