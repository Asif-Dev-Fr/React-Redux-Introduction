import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// Version Redux 2 :
import { createStore } from 'redux';
import allReducers from './reducers/index';
// Connect the store to APP :
import { Provider } from 'react-redux';
/* Add Provider below : */
 

// combineReducerts -> Multiple reducers so we have to bind them : 
const myStore = createStore(allReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())



/* --------------------------------------------------------------------------------------------------------------
Version Redux 1 :
import { createStore } from 'redux';

// Store -> Globalised state (createStore)

// Action -> Description of what you want to do :
const increment = () => {
  return {
    type: 'INCREMENT'
  }
}

const decrement = () => {
  return {
    type: 'DECREMENT',
  }
}

// Reducer -> Description how your action transform the state to the next state :
const counter = (state = 0, action ) => {
  switch(action.type) {
    case "INCREMENT":
      return state + 1;
    
    case "DECREMENT" :
      return state - 1;

    default:
      return state; 
  }
};

let store = createStore(counter);

/* Display it on the console */ /*
store.subscribe(() => console.log(store.getState()));


// Dispatch -> Where you can execute the action :
store.dispatch(increment()); 
store.dispatch(decrement()); 
store.dispatch(decrement()); 

---------------------------------------------------------------------------------------------------------------- */


ReactDOM.render(
  <React.StrictMode>
    <Provider store={myStore}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
