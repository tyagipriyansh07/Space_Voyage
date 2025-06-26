import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="container">
      <h1>Welcome to NASA Data Explorer</h1>
      <p>Explore various NASA datasets:</p>
      <ul>
        <li><Link to="/apod">Astronomy Picture of the Day</Link></li>
        <li><Link to="/images">Space Gallery</Link></li>
        <li><Link to="/epic">Earth from Space</Link></li>
        <li><Link to="/neows">Near Earth Objects</Link></li>
        <li><Link to="/mars-rover">Mars Exploration</Link></li>
      </ul>
    </div>
  );
};

export default HomePage;