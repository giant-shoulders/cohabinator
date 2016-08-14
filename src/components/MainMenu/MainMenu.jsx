import './MainMenu.css';

import React from 'react';

import Menu from '../Menu';

const indexMenuItems = [
  { name: 'Pets', path: '/pets' },
  { name: 'Shopping' },
  { name: 'Chat' },
];

const IndexLayout = () => (
  <div className="container text-center">
    <Menu items={indexMenuItems} mainMenu />
  </div>
);

export default IndexLayout;
