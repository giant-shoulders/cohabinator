/* eslint no-unused-expressions: 0 */

import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const MenuItem = ({ name, path, onClick }) => {
  const menuItem = do {
    if (path) {
      <Link className="menu-item" to={path}>{name}</Link>;
    } else if (onClick) {
      (
        <a
          className="menu-item"
          onClick={e => {
            e.preventDefault();
            onClick();
          }}
        >
          {name}
        </a>
      );
    } else {
      <div className="menu-item coming-soon">{name}</div>;
    }
  };

  return (
    <div className="row menu-row">
      <div className="column">
        {menuItem}
      </div>
    </div>
  );
};

MenuItem.propTypes = {
  name: PropTypes.string.isRequired,
  path: PropTypes.string,
  onClick: PropTypes.func,
};

export default MenuItem;
