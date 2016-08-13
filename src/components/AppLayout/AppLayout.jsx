import React, { Component, PropTypes } from 'react';

import LoginLayoutContainer from '../../containers/LoginLayoutContainer';

class AppLayout extends Component {
  static propTypes = {
    userLoggedIn: PropTypes.bool.isRequired,
    children: PropTypes.node,
    bindToAuth: PropTypes.func.isRequired,
    onUserLogout: PropTypes.func.isRequired,
  }

  componentDidMount() {
    this.props.bindToAuth();
  }

  render() {
    const { userLoggedIn, children, onUserLogout } = this.props;

    if (!userLoggedIn) return <LoginLayoutContainer />;

    return (
      <div className="container">
        <div className="row">
          <div className="column">
            <h4>Cohabinator</h4>
          </div>
        </div>
        {children}
        <button className="button" onClick={onUserLogout}>Logout</button>
      </div>
    );
  }
}

export default AppLayout;
