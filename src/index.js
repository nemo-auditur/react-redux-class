import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
//import redux stuff
import {createStore} from 'redux'
import counter from './reducers/counter';
import {Provider} from 'react-redux'

//create the global store
const store = createStore(counter)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //inject the store in the App
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
