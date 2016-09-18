import React, { PropTypes } from 'react';

const PetsLayout = ({ children }) => (
  <div className="container">
    <h5 className="text-center">Pets</h5>
    {children}
  </div>
);

PetsLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PetsLayout;
