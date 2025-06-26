import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>NASA Data Explorer</h1>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/apod">APOD</Link></li>
        <li><Link to="/images">Space Gallery</Link></li>
        <li><Link to="/epic">Earth from Space</Link></li>
        <li><Link to="/neows">Near Earth Objects</Link></li>
        <li><Link to="/mars-rover">Mars Exploration</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;