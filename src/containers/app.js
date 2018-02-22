import fetch from 'isomorphic-fetch';
import React, { Component } from 'react';
import PizzaList from '../components/PizzaList/pizzaList';
import FilterPizzaInput from '../components/FilterPizza/filterPizzaInput';
import SortPizzaButton from '../components/SortPizza/sortPizzaButton';
import {fetchPizzas} from '../services/api';
import WelcomeHeader from '../components/Header/welcomeHeader';
import PropTypes from 'prop-types';

function handleInputChange (value) {

    const filteredList = this.state.pizzas.filter(pizza => {
           
        return pizza.toLowerCase().includes(value.toLowerCase())
    })
 
    this.setState({
        filteredPizzas: filteredList 
    })
}

function handleSortButtonClick () {

    const sorted = this.state.listAlreadySorted 
    const aplhalist=  this.state.filteredPizzas.sort((a,b) => a.toLowerCase().localeCompare(b.toLowerCase()))
   
    if(sorted){
        this.setState({
            filteredList: aplhalist,
            listAlreadySorted: false
        })   
     }else{
        this.setState({
            filteredList:aplhalist.reverse(),
            listAlreadySorted: true
        })   
     }
}

class App extends Component {
    state = {
        pizzas: [],
        isLoading: true,
        filteredPizzas: [],
        listAlreadySorted: false
    }

    componentDidMount() {

      this.props.fetchPizzas().then(data => {
          this.setState({
              pizzas: data.pizzas,
              isLoading: false,
              filteredPizzas: data.pizzas
           })
      })
    }
 
    render()
    {
        return (
            this.state.isLoading ?
            <div><p className='loading-text'>Loading...</p></div>
            :
            <div>
                <WelcomeHeader/>
                <PizzaList pizzas={this.state.filteredPizzas}/>
                <FilterPizzaInput className='input-filter' onInputChange={handleInputChange.bind(this)}/>
                <SortPizzaButton className="sort-button" onSortButtonClick={handleSortButtonClick.bind(this)}/>
            </div>
        )
    } 
} 

App.defaultProps = {
    fetchPizzas
}

FilterPizzaInput.propTypes = {
    fetchPizzas : PropTypes.func.isRequired
}

 
export default App