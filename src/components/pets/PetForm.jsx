import React, { PropTypes } from 'react';

import Form from '../Form';

const PetForm = ({
  name, petType, petTypes, onSubmit, updateFieldValue,
}) => (
  <Form onSubmit={() => onSubmit(name, petType)}>
    <label htmlFor="name">Name</label>
    <input
      type="text"
      name="name"
      placeholder="Pet Name"
      value={name}
      onChange={updateFieldValue('name')}
    />
    <label htmlFor="petType">Pet Type</label>
    <select
      name="petType"
      onChange={updateFieldValue('petType')}
      value={petType}
    >
      {petTypes.map(({ id, name: petTypeName }) => (
        <option
          key={id}
          value={id}
        >
          {petTypeName}
        </option>
      ))}
    </select>
  </Form>
);

PetForm.propTypes = {
  petTypes: PropTypes.arrayOf(PropTypes.object).isRequired,
  name: PropTypes.string,
  petType: PropTypes.string,
  onSubmit: PropTypes.func.isRequired,
  updateFieldValue: PropTypes.func.isRequired,
};

export default PetForm;
