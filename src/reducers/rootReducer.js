import { combineReducers } from 'redux';

import modules from './modules';
import pets from './pets';
import petTypes from './petTypes';

export default combineReducers({
  modules, pets, petTypes,
});
