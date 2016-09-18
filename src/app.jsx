/* eslint global-require: 0, no-console: 0 */

import firebase from 'firebase';
import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import configureStore from './store';
import App from './components/App';

firebase.initializeApp({
  apiKey: 'AIzaSyDmjT8hDZJdL_GqrfsvKtN_0jf8kp16aDM',
  authDomain: 'cohabinator-staging.firebaseapp.com',
  databaseURL: 'https://cohabinator-staging.firebaseio.com',
  storageBucket: 'cohabinator-staging.appspot.com',
});

const store = configureStore({});
const rootEl = document.getElementById('root');

render(
  <AppContainer>
    <App store={store} />
  </AppContainer>,
  rootEl
);

if (module.hot) {
  module.hot.accept('./components/App', () => {
    // If you use Webpack 2 in ES modules mode, you can
    // use <App /> here rather than require() a <NextApp />.
    const NextApp = require('./components/App').default;
    render(
      <AppContainer>
        <NextApp store={store} />
      </AppContainer>,
      rootEl
    );
  });
}
