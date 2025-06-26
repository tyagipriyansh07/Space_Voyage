import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MarsRoverPage = () => {
  const [photos, setPhotos] = useState([]);
  const [sol, setSol] = useState(1000);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/mars-rover?sol=${sol}`);
        setPhotos(response.data.photos);
        setLoading(false);
      } catch (error) {
        setError('Failed to load Mars rover photos');
        setLoading(false);
      }
    };
    fetchPhotos();
  }, [sol]);

  const handleSearch = (e) => {
    e.preventDefault();
    setSol(e.target.elements.sol.value);
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="container">
      <h1>Mars Exploration</h1>
      <form onSubmit={handleSearch}>
        <input type="number" name="sol" placeholder="Enter Sol (e.g., 1000)" />
        <button type="submit">Search</button>
      </form>
      <div className="mars-rover-container">
        {photos.map((photo) => (
          <div key={photo.id} className="mars-rover-card">
            <img src={photo.img_src} alt={`Mars Rover ${photo.id}`} />
            <h3>Camera: {photo.camera.full_name}</h3>
            <p>Date: {photo.earth_date}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MarsRoverPage;