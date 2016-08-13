import React, { PropTypes } from 'react';

const AppLayout = ({ children }) => (
  <div>
    <div className="container">
      <div className="row">
        <div className="column">
          <h2>Cohabinator</h2>
        </div>
      </div>
      {children}
    </div>
  </div>
);

AppLayout.propTypes = {
  children: PropTypes.node,
};

export default AppLayout;
