import firebase from 'firebase';

export const USER_LOGGED_IN = 'USER_LOGGED_IN';
export const USER_LOGGED_OUT = 'USER_LOGGED_IN';

const userLoggedIn = (user) => ({ type: USER_LOGGED_IN, user });
const userLoggedOut = (user) => ({ type: USER_LOGGED_OUT, user });

export const createNewUser = (email, password) => dispatch => {
  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(user => {
      dispatch(userLoggedIn(user));
    })
    .catch(err => { console.warn('Error: ', err.message); });
};

export const loginUser = (email, password) => dispatch => {
  firebase.auth().signInWithEmailAndPassword(email, password)
    .then(user => {
      dispatch(userLoggedIn(user));
    })
    .catch(err => { console.warn('Error: ', err.message); });
};

export const logoutUser = () => dispatch => {
  firebase.auth().signOut()
    .then(() => { dispatch(userLoggedOut()); })
    .catch(err => { console.warn('Error: ', err.message); });
};
