import { connect } from 'react-redux';

import NewPet from '../components/pets/NewPet';
import { createPet } from '../actions/pets';

const mapDispatchToProps = dispatch => ({
  createPet(form) {
    dispatch(createPet(form));
  },
});

export default connect(null, mapDispatchToProps)(NewPet);
