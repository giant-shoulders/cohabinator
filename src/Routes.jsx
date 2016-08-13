import React, { PropTypes } from 'react';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';

import 'milligram-cssnext';
import AppLayout from './components/AppLayout';

const appRoutes = {
  path: '/',
  component: AppLayout,
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
