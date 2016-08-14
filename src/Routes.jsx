import './main.css';

import React, { PropTypes } from 'react';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';

import AppLayoutContainer from './containers/AppLayoutContainer';
import MainMenu from './components/MainMenu';
import PetsLayout from './components/Pets/PetsLayout';
import Pets from './components/Pets/Pets';
import NewPet from './components/Pets/NewPet';

const petsRoutes = {
  path: 'pets',
  component: PetsLayout,
  indexRoute: { component: Pets },
  childRoutes: [
    { path: 'new', component: NewPet },
  ],
};

const routes = {
  path: '/',
  component: AppLayoutContainer,
  indexRoute: { component: MainMenu },
  childRoutes: [petsRoutes],
};

const Routes = ({ store }) => (
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>
);

Routes.propTypes = {
  store: PropTypes.object.isRequired,
};

export default Routes;
