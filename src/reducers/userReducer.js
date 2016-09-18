import * as actions from '../actions/user';

import update from 'react-addons-update';
import { handleActions } from 'redux-actions';

const initialState = {
  creating: false,
  loggingIn: false,
  loggingOut: false,
  account: null,
  error: null,
};

export default handleActions({
  [actions.userStateChanged]: (state, action) => update(state, {
    $merge: {
      account: action.payload,
      creating: false,
      loggingIn: false,
      loggingOut: false,
      error: action.payload ? null : state.error,
    },
  }),
}, initialState);
