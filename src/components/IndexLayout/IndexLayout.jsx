import React, { PropTypes } from 'react';

import ItemsList from '../ItemList';

const IndexLayout = ({ modules, pets, petTypes }) => (
  <div>
    <ItemsList header="modules" items={modules} />
    <ItemsList header="pets" items={pets} />
    <ItemsList header="petTypes" items={petTypes} />
  </div>
);

IndexLayout.propTypes = {
  modules: PropTypes.arrayOf(PropTypes.object),
  pets: PropTypes.arrayOf(PropTypes.object),
  petTypes: PropTypes.arrayOf(PropTypes.object),
};

export default IndexLayout;
