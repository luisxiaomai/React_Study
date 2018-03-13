import React from 'react'
import ReactDOM from 'react-dom'
import App from './App.js'
import { createStore } from 'redux'
import reducer from './reducers/index'

var products = [
    {
        category: 'Sporting Goods',
        price: '$49.99',
        stocked: true,
        name: 'Football'
    }, {
        category: 'Sporting Goods',
        price: '$9.99',
        stocked: true,
        name: 'Baseball'
    }, {
        category: 'Sporting Goods',
        price: '$29.99',
        stocked: false,
        name: 'Basketball'
    }, {
        category: 'Electronics',
        price: '$99.99',
        stocked: true,
        name: 'iPod Touch'
    }, {
        category: 'Electronics',
        price: '$399.99',
        stocked: false,
        name: 'iPhone 5'
    }, {
        category: 'Electronics',
        price: '$199.99',
        stocked: true,
        name: 'Nexus 7'
    }
];

const store = createStore(reducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
const render = () => ReactDOM.render(
    <App products={products} value={store.getState()}
        onIncrement={() => store.dispatch({ type: 'INCREMENT' })}
        onDecrement={() => store.dispatch({ type: 'DECREMENT' })} />, document.getElementById("app")
);
render();
store.subscribe(render);