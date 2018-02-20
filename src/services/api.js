import 'isomorphic-fetch'

export const BASE_URL = './src/store/pizza.json';

export const fetchPizzas = () => {

    return fetch(BASE_URL)
    .then(res => res.json())
}