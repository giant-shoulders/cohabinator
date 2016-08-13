import { combineReducers } from 'redux';

import pets from './petsReducer';
import petTypes from './petTypesReducer';
import user from './userReducer';

export default combineReducers({ user, pets, petTypes });
