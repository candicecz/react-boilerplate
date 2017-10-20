import 'babel-polyfill';

import React from 'react';
import {render} from 'react-dom';
import ReactDOM from 'react-dom';
import App from './App';

import {BrowserRouter} from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
//root is defined in index.html
