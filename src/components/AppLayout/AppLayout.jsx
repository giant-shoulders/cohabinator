import React, { PropTypes } from 'react';

const AppLayout = ({ children }) => (
  <div>
    <h2>DogLog</h2>
    {children}
  </div>
);

AppLayout.propTypes = {
  children: PropTypes.node,
};

export default AppLayout;
