import 'babel-polyfill';

import React from 'react';
import {render} from 'react-dom';
import App from './components/App';

render(<App />, document.querySelector('#root'));
//root is defined in index.html
