import update from 'react-addons-update';

import { USER_STATE_CHANGED } from '../actions/user';

const initialState = {
  creating: false,
  loggingIn: false,
  loggingOut: false,
  account: null,
  error: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_STATE_CHANGED: {
      const newState = {
        account: action.user,
        creating: false,
        loggingIn: false,
        loggingOut: false,
      };

      if (action.user) newState.error = null;

      return update(state, { $merge: newState });
    }
    default:
      return state;
  }
};

export default userReducer;
