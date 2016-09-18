import { connect } from 'react-redux';

import LoginLayout from '../components/LoginLayout';
import { userCreate, userLogin } from '../actions/user';

const mapStateToProps = ({ user }) => ({ user });

const mapDispatchToProps = dispatch => ({
  onUserCreate(email, password) {
    dispatch(userCreate(email, password));
  },
  onUserLogin(email, password) {
    dispatch(userLogin(email, password));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginLayout);
