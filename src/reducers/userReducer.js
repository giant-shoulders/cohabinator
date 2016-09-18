import update from 'react-addons-update';
import { handleActions } from 'redux-actions';

import { USER_STATE_CHANGED } from '../actions/user';

const initialState = {
  creating: false,
  loggingIn: false,
  loggingOut: false,
  account: null,
  error: null,
};

export default handleActions({
  USER_STATE_CHANGED: (state, { payload }) => update(state, {
    $merge: {
      account: payload,
      creating: false,
      loggingIn: false,
      loggingOut: false,
      error: payload ? null : state.error,
    },
  }),
}, initialState);
