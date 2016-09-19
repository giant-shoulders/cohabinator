import update from 'react-addons-update';
import { handleActions } from 'redux-actions';

import { updateFieldValue, resetForm } from '../actions/forms';

const initialState = {
  pet: {
    name: '',
    petType: undefined,
  },
};

export default handleActions({
  [updateFieldValue]: (state, { payload }) => update(state, {
    [payload.formName]: {
      [payload.fieldName]: { $set: payload.value },
    },
  }),
  [resetForm]: (state, { payload: formName }) => update(state, {
    [formName]: { $set: initialState[formName] },
  }),
}, initialState);
