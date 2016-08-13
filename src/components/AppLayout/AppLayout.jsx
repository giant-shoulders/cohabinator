import './AppLayout.css';

import React, { PropTypes } from 'react';

import LoginLayout from '../LoginLayout';

const AppLayout = ({ user, children, onUserLogin, onUserCreate }) => (
  <div>
    {user ? (
      <div className="container">
        <div className="row">
          <div className="column">
            <h4>Cohabinator</h4>
          </div>
        </div>
        {children}
      </div>
    ) : (
      <LoginLayout onUserLogin={onUserLogin} onUserCreate={onUserCreate} />
    )}
  </div>
);

AppLayout.propTypes = {
  user: PropTypes.object,
  children: PropTypes.node,
  onUserLogin: PropTypes.func.isRequired,
  onUserCreate: PropTypes.func.isRequired,
};

export default AppLayout;
