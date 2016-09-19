import { connect } from 'react-redux';

import Pets from '../components/pets/Pets';
import { selectPets } from '../selectors';

const mapStateToProps = state => ({
  pets: selectPets(state),
});

export default connect(mapStateToProps)(Pets);
