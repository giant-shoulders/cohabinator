import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';

import rootReducer from '../reducers';

const middleware = [thunk];
if (__DEV__) middleware.push(logger({ collapsed: true }));

export default (initialState) => createStore(rootReducer, initialState, applyMiddleware(...middleware));
