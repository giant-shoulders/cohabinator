import React, { Component, PropTypes } from 'react';

import LoginLayout from '../../containers/LoginLayout';

class AppLayout extends Component {
  static propTypes = {
    children: PropTypes.node,
    bindToAuth: PropTypes.func.isRequired,
    userLoggedIn: PropTypes.bool.isRequired,
    onUserLogout: PropTypes.func.isRequired,
  }

  static contextTypes = {
    router: PropTypes.object.isRequired,
  };

  componentDidMount() {
    this.props.bindToAuth();
  }

  onSignOutClick = () => {
    const { onUserLogout } = this.props;
    const { router } = this.context;

    onUserLogout();
    router.push('/');
  }

  render() {
    const { userLoggedIn, children } = this.props;

    return (
      <div>
        <h2 className="header text-center">Cohabinator</h2>
        {userLoggedIn ? (
          <div>
            {children}
            <div className="footer">
              <button className="button" onClick={this.onSignOutClick}>Sign Out</button>
            </div>
          </div>
        ) : <LoginLayout />}
      </div>
    );
  }
}

export default AppLayout;
