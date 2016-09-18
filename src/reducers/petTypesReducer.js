import { handleActions } from 'redux-actions';

const initialState = [
  { id: 1, name: 'dog' },
];

export default handleActions({}, initialState);
