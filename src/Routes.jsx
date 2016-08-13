import './main.css';

import React, { PropTypes } from 'react';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';

import AppLayoutContainer from './containers/AppLayoutContainer';
import IndexLayoutContainer from './containers/IndexLayoutContainer';

const appRoutes = {
  path: '/',
  component: AppLayoutContainer,
  indexRoute: { component: IndexLayoutContainer },
};

const Routes = ({ store }) => (
  <Provider store={store}>
    <Router history={browserHistory} routes={appRoutes} />
  </Provider>
);

Routes.propTypes = {
  store: PropTypes.object.isRequired,
};

export default Routes;
