import React, {Component} from 'react';
import PropTypes from 'prop-types'
import PizzaListItem from './PizzaListItem/pizzaListItem'

class PizzaList extends Component {
    
    renderList = (pizzas = []) => {
   
        return pizzas.map((pizza, index )=> (

            <PizzaListItem id={index} key={index} pizzaType={pizza}/>

        ))

    }
    
    render() {

        return (
            <ul>
               {this.renderList(this.props.pizzas)}
            </ul>
        )
    }
}


PizzaList.propTypes = {
    pizzas: PropTypes.array.isRequired
}

export default PizzaList;
 