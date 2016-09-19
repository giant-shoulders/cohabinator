import randomstring from 'randomstring';
import { createAction } from 'redux-actions';

export const createPet = createAction('CREATE_PET',
  payload => ({ ...payload, id: randomstring.generate(10) })
);
