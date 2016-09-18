import { connect } from 'react-redux';

import AppLayout from '../components/AppLayout';
import { bindToAuthStateChanged, userLogout } from '../actions/user';

const mapStateToProps = ({ user }) => ({
  userLoggedIn: !!user.account,
});

const mapDispatchToProps = (dispatch) => ({
  bindToAuth() {
    dispatch(bindToAuthStateChanged());
  },
  onUserLogout() {
    dispatch(userLogout());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(AppLayout);
