import './App.css';
import React from 'react'
//import redux stuff
import { useSelector, useDispatch } from 'react-redux'
import {increment, decrement, reset} from './actions'

function App() {

  //special functions to interact with the store
  //useSelector : this function is used to retrieve values ​​from the store
  const counter = useSelector(state=>state.count)
  //useDispatch : this function is used to send elements to the store
  const dispatch = useDispatch()

  return (
    <div className="App">
      <div>{counter}</div>
      <button
        onClick={()=> dispatch(increment())}>+</button>
      <button
        onClick={()=> dispatch(decrement())}>-</button>
      <button
        onClick={() => dispatch(reset())}>reset</button>
    </div>
  );
}

export default App;
