import React, { PropTypes } from 'react';
import { Provider } from 'react-redux';
import { Router, hashHistory } from 'react-router';

import AppLayout from './components/AppLayout';
import ResultsLayout from './components/ResultsLayout';
import WizardLayout from './components/WizardLayout';

const appRoutes = {
  path: '/',
  component: AppLayout,
  indexRoute: { component: WizardLayout },
  childRoutes: [
    { path: '/results', component: ResultsLayout },
  ],
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
