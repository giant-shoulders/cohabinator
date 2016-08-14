import React, { PropTypes } from 'react';

import Menu from '../Menu';

const Pets = (props, context) => {
  const petsMenuItems = [
    { name: 'New Pet', path: '/pets/new' },
    { name: 'Back', onClick: context.router.goBack },
  ];

  return <Menu items={petsMenuItems} />;
};

Pets.contextTypes = {
  router: PropTypes.object.isRequired,
};

export default Pets;
