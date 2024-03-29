import React from 'react';
import ReactDOM from 'react-dom';
import App from './container/App';
import reportWebVitals from "./reportWebVitals";
import {HashRouter} from 'react-router-dom'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();