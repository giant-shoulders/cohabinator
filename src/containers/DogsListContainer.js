import { connect } from 'react-redux';
import ItemList from '../components/ItemList';

const mapStateToProps = ({ dogs }) => ({ items: dogs });

export default connect(mapStateToProps)(ItemList);
