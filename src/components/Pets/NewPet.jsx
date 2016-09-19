import React, { PropTypes } from 'react';

import PetForm from '../../containers/PetForm';

const NewPet = ({ createPet }) => (
  <div>
    <PetForm onSubmit={createPet} />
  </div>
);

NewPet.propTypes = {
  createPet: PropTypes.func.isRequired,
};

export default NewPet;
