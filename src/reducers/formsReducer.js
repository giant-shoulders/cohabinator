import * as actions from '../actions/forms';

import update from 'react-addons-update';
import { handleActions } from 'redux-actions';

const initialState = {
  pet: {
    name: '',
    petType: null,
  },
};

export default handleActions({
  [actions.updateFieldValue]: (state, { payload }) => update(state, {
    [payload.formName]: {
      [payload.fieldName]: { $set: payload.value },
    },
  }),
}, initialState);
