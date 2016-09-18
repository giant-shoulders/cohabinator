import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';

import rootReducer from '../reducers';

const middleware = [thunk];
if (__DEV__) middleware.push(logger({ collapsed: true }));

export default initialState => createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(...middleware),
    window.devToolsExtension ? window.devToolsExtension() : f => f,
  ),
);
