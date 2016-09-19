import React, { PropTypes } from 'react';

import Menu from '../Menu';

const petsMenuItems = [
  { name: 'New Pet', path: '/pets/new' },
  { name: 'Back', path: '/' },
];

const Pets = ({ pets }) => (
  <div>
    <div className="row">
      <div className="column column-100">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Type</th>
              <th>Last fed</th>
              <th>Last walked</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {pets.map(pet => (
              <tr key={pet.id}>
                <td>{pet.name}</td>
                <td>{pet.type.name}</td>
                <td>5 hours ago</td>
                <td>4 hours ago</td>
                <td className="table-actions">
                  <button type="button" className="button-primary">Fed</button>
                  <button type="button" className="button-primary">Walked</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    <Menu items={petsMenuItems} />
  </div>
);

Pets.contextTypes = {
  router: PropTypes.object.isRequired,
};

export default Pets;
