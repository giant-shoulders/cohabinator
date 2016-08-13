import React, { PropTypes } from 'react';

const AppLayout = ({ children }) => (
  <div>
    <div className="container">
      <div className="row">
        <div className="column">
          <h4>Cohabinator</h4>
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
