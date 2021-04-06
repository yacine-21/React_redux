import React from 'react';
import {useSelector, useDispatch} from 'react-redux'
import {increment, decrement, SIGN_IN} from './actions'
function App() {
  const counter = useSelector(state =>state.counter)
  const isLogged = useSelector(state =>state.isLogged)
  const dispatch = useDispatch()
  return (
    <div className="App">
      <h1>Counter : {counter}</h1>
      <button onClick={() => dispatch(increment(5))}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(SIGN_IN())}>LOG IN</button>

      {isLogged ? <h3>Valuable information I shouldn't see</h3> : ""}
    </div>
  );
}

export default App;
