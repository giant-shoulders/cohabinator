import update from 'react-addons-update';

import { USER_LOGGED_IN } from '../actions/user';

const initialState = null;

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_LOGGED_IN:
      return update(state, { $set: action.user });
    default:
      return state;
  }
};

export default userReducer;
