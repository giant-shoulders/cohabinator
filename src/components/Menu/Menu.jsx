import './Menu.css';

import React, { PropTypes } from 'react';

import MenuItem from './MenuItem';

const Menu = ({ items }) => (
  <div className="menu container text-center">
    {items && items.map(item =>
      <MenuItem key={item.name} {...item} />
    )}
  </div>
);

Menu.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
};

Menu.contextTypes = {
  router: PropTypes.object.isRequired,
};

export default Menu;
