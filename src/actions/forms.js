import { createAction } from 'redux-actions';

export const updateFieldValue = createAction('UPDATE_FIELD_VALUE',
  (formName, fieldName, value) => ({ formName, fieldName, value })
);

export const resetForm = createAction('RESET_FORM');
