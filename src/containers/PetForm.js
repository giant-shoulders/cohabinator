import { connect } from 'react-redux';

import PetForm from '../components/pets/PetForm';
import { updateFieldValue } from '../actions/forms';
import { selectPetTypes } from '../selectors';

const mapStateToProps = state => ({
  petTypes: selectPetTypes(state),
  name: state.forms.pet.name,
  petType: state.forms.pet.petType,
});

const mapDispatchToProps = dispatch => ({
  updateFieldValue(fieldName) {
    return (e) => {
      dispatch(updateFieldValue('pet', fieldName, e.target.value));
    };
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(PetForm);
