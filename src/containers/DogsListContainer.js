import './DogsList.css';

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

const DogsList = ({ dogs }) => (
  <div className="dogs-list">
    <h4>Dogs</h4>
    <ul>
      {dogs.map(({ name }) => (
        <li key={name}>{name}</li>
      ))}
    </ul>
  </div>
);

DogsList.propTypes = {
  dogs: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = ({ dogs }) => ({ dogs });

export default connect(mapStateToProps)(DogsList);
