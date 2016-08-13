import React, { PropTypes } from 'react';

import ItemsList from '../ItemList';

const IndexLayout = ({ modules, pets, petTypes }) => (
  <div className="row">
    <div className="column">
      <ItemsList header="modules" items={modules} />
    </div>
    <div className="column">
      <ItemsList header="pets" items={pets} />
    </div>
    <div className="column">
      <ItemsList header="petTypes" items={petTypes} />
    </div>
  </div>
);

IndexLayout.propTypes = {
  modules: PropTypes.arrayOf(PropTypes.object),
  pets: PropTypes.arrayOf(PropTypes.object),
  petTypes: PropTypes.arrayOf(PropTypes.object),
};

export default IndexLayout;
