import React, { PropTypes } from 'react';

import Menu from '../Menu';

const Pets = () => {
  const petsMenuItems = [
    { name: 'New Pet', path: '/pets/new' },
    { name: 'Back', path: '/' },
  ];

  return <Menu items={petsMenuItems} />;
};

Pets.contextTypes = {
  router: PropTypes.object.isRequired,
};

export default Pets;
