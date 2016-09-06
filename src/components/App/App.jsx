import './App.css';

import React, { PropTypes } from 'react';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';

import AppLayoutContainer from '../../containers/AppLayoutContainer';
import MainMenu from '../MainMenu';
import PetsLayout from '../Pets/PetsLayout';
import Pets from '../Pets/Pets';
import NewPet from '../Pets/NewPet';

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

const App = ({ store }) => (
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>
);

App.propTypes = {
  store: PropTypes.object.isRequired,
};

export default App;
