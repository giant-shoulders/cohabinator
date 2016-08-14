import React, { PropTypes } from 'react';

const PetsLayout = ({ children }) => (
  <div className="container">
    <h6 className="text-center">Pets</h6>
    {children}
  </div>
);

PetsLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PetsLayout;
