import { handleActions } from 'redux-actions';

const initialState = [
  { id: 1, name: 'dog' },
  { id: 2, name: 'cat' },
  { id: 3, name: 'bird' },
];

export default handleActions({}, initialState);
