import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';

import forms from './formsReducer';
import pets from './petsReducer';
import petTypes from './petTypesReducer';
import user from './userReducer';

export default combineReducers({ routing: routerReducer, user, forms, pets, petTypes });
