import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Pokeclient from './pokeclient.js'

const pokeclient = Pokeclient('https://pokeapi.co/api/v2')

ReactDOM.render(
  <React.StrictMode>
      <App pokeclient={pokeclient} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
