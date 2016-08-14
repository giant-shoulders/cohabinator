import './AppLayout.css';

import React, { Component, PropTypes } from 'react';

import LoginLayoutContainer from '../../containers/LoginLayoutContainer';

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

    if (!userLoggedIn) return <LoginLayoutContainer />;

    return (
      <div>
        <h3 className="header text-center">Cohabinator</h3>
        {children}
        <div className="footer">
          <button className="button" onClick={this.onSignOutClick}>Sign Out</button>
        </div>
      </div>
    );
  }
}

export default AppLayout;
