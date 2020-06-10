import React from 'react';
import ReactDOM from 'react-dom';
import PJBApp from './PJBApp';
import store from './app/store';
import { Provider } from 'react-redux';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PJBApp />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);