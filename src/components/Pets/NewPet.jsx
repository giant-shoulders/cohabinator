import React, { PropTypes } from 'react';

const NewPet = ({ petTypes }) => (
  <div>
    <form>
      <fieldset>
        <pre>
          {JSON.stringify(petTypes, null, 2)}
        </pre>
      </fieldset>
    </form>
  </div>
);

NewPet.propTypes = {
  petTypes: PropTypes.array.isRequired,
};

export default NewPet;
