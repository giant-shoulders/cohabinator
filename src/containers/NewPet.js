import { connect } from 'react-redux';
import { push } from 'react-router-redux';

import NewPet from '../components/pets/NewPet';
import { resetForm } from '../actions/forms';
import { createPet } from '../actions/pets';

const mapDispatchToProps = dispatch => ({
  createPet(name, petType) {
    dispatch(createPet({ name, petType }));
    dispatch(resetForm('pet'));
    dispatch(push('/pets'));
  },
});

export default connect(null, mapDispatchToProps)(NewPet);
