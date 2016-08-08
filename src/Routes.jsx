import React, { PropTypes } from 'react';
import { Provider } from 'react-redux';
import { Router, hashHistory } from 'react-router';

import AppLayout from './components/AppLayout';
import IndexLayoutContainer from './containers/IndexLayoutContainer';

const appRoutes = {
  path: '/',
  component: AppLayout,
  indexRoute: { component: IndexLayoutContainer },
};

const Routes = ({ store }) => (
  <Provider store={store}>
    <Router history={hashHistory} routes={appRoutes} />
  </Provider>
);

Routes.propTypes = {
  store: PropTypes.object.isRequired,
};

export default Routes;
