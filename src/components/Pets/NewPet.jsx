import React from 'react';

import PetForm from '../../containers/PetForm';

const NewPet = ({ createPet }) => (
  <div>
    <PetForm onSubmit={createPet} />
  </div>
);

export default NewPet;
