import React, {Component} from 'react'
import PropTypes from 'prop-types'

class FilterPizzaInput extends Component {
    state = {
        filterText: ""
    }

    onInputChange = (event) => {
        const value = event.target.value;

        this.setState({
            filterText: value
        })
        
        this.props.onInputChange(value)
    }

    render() {
        return (
            <div>
                <input value={this.state.filterText} onChange={this.onInputChange}/>
            </div>
        )
    }
}  

FilterPizzaInput.propTypes = {
    onInputChange : PropTypes.func.isRequired
}

export default FilterPizzaInput;