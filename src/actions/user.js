import firebase from 'firebase';
import { createAction } from 'redux-actions';

// internal action creators
export const userStateChanged = createAction('USER_STATE_CHANGED');
export const userAuthError = createAction('USER_AUTH_ERROR');
export const creatingNewUser = createAction('CREATING_NEW_USER');
export const userLoggingIn = createAction('USER_LOGGING_IN');
export const userLoggingOut = createAction('USER_LOGGING_OUT');

// exported action creators
export const bindToAuthStateChanged = () => (
  (dispatch) => {
    firebase.auth()
      .onAuthStateChanged((user) => {
        dispatch(userStateChanged(user));
      });
  }
);

export const userCreate = (email, password) => (
  (dispatch) => {
    dispatch(creatingNewUser());

    firebase.auth()
      .createUserWithEmailAndPassword(email, password)
      .catch((err) => { dispatch(userAuthError(err)); });
  }
);

export const userLogin = (email, password) => (
  (dispatch) => {
    dispatch(userLoggingIn());

    firebase.auth()
      .signInWithEmailAndPassword(email, password)
      .catch((err) => { dispatch(userAuthError(err)); });
  }
);

export const userLogout = () => (
  (dispatch) => {
    dispatch(userLoggingOut());

    firebase.auth()
      .signOut()
      .catch((err) => { dispatch(userAuthError(err)); });
  }
);
