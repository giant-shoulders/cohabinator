import './Menu.css';

import React, { Component, PropTypes } from 'react';

import MenuItem from './MenuItem';

class Menu extends Component {
  static propTypes = {
    items: PropTypes.arrayOf(PropTypes.object),
  }

  static contextTypes = {
    router: PropTypes.object.isRequired,
  }

  render() {
    const { items } = this.props;

    return (
      <div className="menu container text-center">
        {items.map(item =>
          <MenuItem key={item.name} {...item} />
        )}
      </div>
    );
  }
}

export default Menu;
