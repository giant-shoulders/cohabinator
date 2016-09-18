import { connect } from 'react-redux';

import PetForm from '../components/pets/PetForm';
import { selectPetTypes } from '../selectors';

const mapStateToProps = state => ({
  petTypes: selectPetTypes(state),
});

export default connect(mapStateToProps)(PetForm);
