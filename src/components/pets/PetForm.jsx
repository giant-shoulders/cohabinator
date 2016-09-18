import React, { PropTypes } from 'react';

const PetForm = ({ petTypes, pet }) => (
  <form>
    <fieldset>
      <label htmlFor="name">Name</label>
      <input type="text" name="name" placeholder="Pet Name" />
      <label htmlFor="petType">Pet Type</label>
      <select name="petType">
        {petTypes.map(({ id, name }) => (
          <option key={id} value={id}>{name}</option>
        ))}
      </select>
      <input type="submit" value="Create" className="button-primary" />
    </fieldset>
  </form>
);

PetForm.propTypes = {
  petTypes: PropTypes.arrayOf(PropTypes.object).isRequired,
  pet: PropTypes.object,
};

export default PetForm;
