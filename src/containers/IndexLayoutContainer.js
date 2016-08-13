import { connect } from 'react-redux';
import IndexLayout from '../components/IndexLayout';

const mapStateToProps = ({ pets, petTypes }) => ({ pets, petTypes });

export default connect(mapStateToProps)(IndexLayout);
