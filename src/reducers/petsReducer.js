import { handleActions } from 'redux-actions';

const initialState = [
  { id: 1, name: 'Bruce', petType: 1 },
  { id: 2, name: 'Buddy', petType: 1 },
];

export default handleActions({}, initialState);
