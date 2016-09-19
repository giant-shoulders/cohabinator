import update from 'react-addons-update';
import { handleActions } from 'redux-actions';

import { createPet } from '../actions/pets';

const initialState = [
  { id: 'DQltsD5Zd1', name: 'Bruce', petType: 'SlQ7WpTcCa' },
  { id: 'fkvwdLlZQ7', name: 'Buddy', petType: 'SlQ7WpTcCa' },
];

export default handleActions({
  [createPet]: (state, { payload }) => update(state, {
    $push: [{
      id: payload.id,
      name: payload.name,
      petType: payload.petType,
    }],
  }),
}, initialState);
