import { connect } from 'react-redux';
import { push } from 'react-router-redux';

import PetForm from '../components/pets/PetForm';
import { updateFieldValue, resetForm } from '../actions/forms';
import { selectPetTypes } from '../selectors';

const mapStateToProps = state => ({
  petTypes: selectPetTypes(state),
  name: state.forms.pet.name,
  petType: state.forms.pet.petType || state.petTypes[0].id,
});

const mapDispatchToProps = dispatch => ({
  updateFieldValue(fieldName) {
    return (e) => {
      dispatch(updateFieldValue('pet', fieldName, e.target.value));
    };
  },
  onCancel() {
    dispatch(resetForm('pets'));
    dispatch(push('/pets'));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(PetForm);
