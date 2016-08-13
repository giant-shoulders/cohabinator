import React, { PropTypes } from 'react';

import ItemsList from '../ItemList';

const IndexLayout = ({ pets, petTypes }) => (
  <div className="row">
    <div className="column">
      <ItemsList header="pets" items={pets} />
    </div>
    <div className="column">
      <ItemsList header="petTypes" items={petTypes} />
    </div>
  </div>
);

IndexLayout.propTypes = {
  pets: PropTypes.arrayOf(PropTypes.object),
  petTypes: PropTypes.arrayOf(PropTypes.object),
};

export default IndexLayout;
