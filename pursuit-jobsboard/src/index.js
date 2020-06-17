import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom' 

import store from './app/store';
import { Provider } from 'react-redux';
import PJBApp from './PJBApp';

import 'typeface-roboto'

ReactDOM.render(
    <Router>
      <Provider store={store}>
        <PJBApp />
      </Provider>
    </Router>,
  document.getElementById('root')
);