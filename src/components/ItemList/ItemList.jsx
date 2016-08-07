import './ItemList.css';

import React, { PropTypes } from 'react';

const ItemList = ({ header, items }) => (
  <div className="item-list">
    <h4>{header}</h4>
    <ul>
      {items.map(({ name }) => (
        <li key={name}>{name}</li>
      ))}
    </ul>
  </div>
);

ItemList.propTypes = {
  header: PropTypes.node,
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ItemList;
