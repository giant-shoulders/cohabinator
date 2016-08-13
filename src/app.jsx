/* eslint global-require: 0, no-console: 0 */

import firebase from 'firebase';
import React from 'react';
import { render as reactRender } from 'react-dom';

import configureStore from './store';
import Routes from './Routes';

firebase.initializeApp({
  apiKey: 'AIzaSyDmjT8hDZJdL_GqrfsvKtN_0jf8kp16aDM',
  authDomain: 'cohabinator-staging.firebaseapp.com',
  databaseURL: 'https://cohabinator-staging.firebaseio.com',
  storageBucket: 'cohabinator-staging.appspot.com',
});

const store = configureStore({});

const render = (Component) => {
  reactRender(<Component store={store} />, document.getElementById('root'));
};

if (module.hot) {
  module.hot.accept('./Routes', () => {
    const newRoutes = require('./Routes').default;
    render(newRoutes);
  });
}

store.subscribe(() => {
  render(Routes);
  if (__DEV__) console.log('state', store.getState());
});

store.dispatch({ type: 'APP_INIT', store });
