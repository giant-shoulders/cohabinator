import React, { PropTypes } from 'react';

const AppLayout = ({ children }) => (
  <div>
    <div>DogLog</div>
    {children}
  </div>
);

AppLayout.propTypes = {
  children: PropTypes.node,
};

export default AppLayout;
