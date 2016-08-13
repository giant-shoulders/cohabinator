import firebase from 'firebase';

// constants
export const USER_STATE_CHANGED = 'USER_STATE_CHANGED';
export const USER_AUTH_ERROR = 'USER_AUTH_ERROR';
export const CREATING_NEW_USER = 'CREATING_NEW_USER';
export const USER_LOGGING_IN = 'USER_LOGGING_IN';
export const USER_LOGGING_OUT = 'USER_LOGGING_OUT';

// internal action creators
const userStateChanged = user => ({ type: USER_STATE_CHANGED, user });
const userAuthError = err => ({ type: USER_AUTH_ERROR, err });
const creatingNewUser = () => ({ type: CREATING_NEW_USER });
const userLoggingIn = () => ({ type: USER_LOGGING_IN });
const userLoggingOut = () => ({ type: USER_LOGGING_OUT });

// exported action creators
export const bindToAuthStateChanged = () => (
  dispatch => {
    firebase.auth()
      .onAuthStateChanged(user => {
        dispatch(userStateChanged(user));
      });
  }
);

export const userCreate = (email, password) => (
  dispatch => {
    dispatch(creatingNewUser());

    firebase.auth()
      .createUserWithEmailAndPassword(email, password)
      .catch(err => { dispatch(userAuthError(err)); });
  }
);

export const userLogin = (email, password) => (
  dispatch => {
    dispatch(userLoggingIn());

    firebase.auth()
      .signInWithEmailAndPassword(email, password)
      .catch(err => { dispatch(userAuthError(err)); });
  }
);

export const userLogout = () => (
  dispatch => {
    dispatch(userLoggingOut());

    firebase.auth()
      .signOut()
      .catch(err => { dispatch(userAuthError(err)); });
  }
);
