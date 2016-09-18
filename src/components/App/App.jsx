import './App.css';

import React, { PropTypes } from 'react';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';

import AppLayout from '../../containers/AppLayout';
import Home from '../Home';
import NewPet from '../../containers/NewPet';
import Pets from '../pets/Pets';
import PetsLayout from '../pets/PetsLayout';

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
  component: AppLayout,
  indexRoute: { component: Home },
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
