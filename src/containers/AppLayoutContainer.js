import { connect } from 'react-redux';

import AppLayout from '../components/AppLayout';
import { createNewUser, loginUser, logoutUser } from '../actions/user';

const mapStateToProps = ({ user }) => ({ user });

const mapDispatchToProps = (dispatch) => ({
  onUserCreate(email, password) {
    dispatch(createNewUser(email, password));
  },
  onUserLogin(email, password) {
    dispatch(loginUser(email, password));
  },
  onUserLogout() {
    dispatch(logoutUser());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(AppLayout);
