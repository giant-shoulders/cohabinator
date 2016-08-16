import './AppLayout.css';

import logo from '../../assets/images/cohabinator.png';

import React from 'react';

const AppLayout = () => (
  <div className="container-body">
    <div>
      <img src={logo} alt="Cohabinator Logo" />
      <h1>Cohabinator</h1>
      <h5>Coming soon.</h5>
    </div>
  </div>
);

export default AppLayout;
