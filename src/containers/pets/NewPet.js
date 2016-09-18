import { connect } from 'react-redux';

import NewPet from '../../components/pets/NewPet';
import { selectPetTypes } from '../../selectors';

const mapStateToProps = state => ({
  petTypes: selectPetTypes(state),
});

export default connect(mapStateToProps)(NewPet);
