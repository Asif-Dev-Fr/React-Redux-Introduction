import React from 'react';
import './App.css';
// Import a state :
import { useSelector, useDispatch } from 'react-redux'
// Import actions : 
import { increment, decrement } from './actions/index';

const App = () => {

  const counter = useSelector(state => state.counter);
  const isLogged = useSelector(state => state.logged);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>React APP</h1>
      <h2>Counter : {counter} </h2>
      <button onClick={() => dispatch(increment(5))}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <div>
        { isLogged ? 'Welcome Member' : 'You need to log to see all the information' }
      </div>
    </div>
  );
}

export default App;
