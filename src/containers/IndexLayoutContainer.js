import { connect } from 'react-redux';
import IndexLayout from '../components/IndexLayout';

const mapStateToProps = ({ pets, petTypes, modules }) => ({ pets, petTypes, modules });

export default connect(mapStateToProps)(IndexLayout);
