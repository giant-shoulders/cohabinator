import { handleActions } from 'redux-actions';

const initialState = [
  { id: 'SlQ7WpTcCa', name: 'dog' },
  { id: 'JFG5KDAYCz', name: 'cat' },
  { id: 'DfNBoGAzZV', name: 'bird' },
];

export default handleActions({}, initialState);
