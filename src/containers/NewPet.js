import { connect } from 'react-redux';

import NewPet from '../components/pets/NewPet';
import { resetForm } from '../actions/forms';
import { createPet } from '../actions/pets';

const mapDispatchToProps = (dispatch) => ({
  createPet(name, petType) {
    dispatch(createPet({ name, petType }));
    dispatch(resetForm('pet'));
  },
});

export default connect(null, mapDispatchToProps)(NewPet);
