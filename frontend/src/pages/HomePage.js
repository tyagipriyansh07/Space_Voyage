import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const HomePage = () => {
  const [apod, setApod] = useState(null);
  const [marsPhoto, setMarsPhoto] = useState(null);
  const [epicImage, setEpicImage] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apodResponse = await axios.get('http://localhost:5000/api/apod');
        setApod(apodResponse.data);

        const marsResponse = await axios.get('http://localhost:5000/api/mars-rover?sol=1000');
        setMarsPhoto(marsResponse.data.photos[0]);

        const epicResponse = await axios.get('http://localhost:5000/api/epic');
        setEpicImage(epicResponse.data[0]);
        setLoading(false);
      } catch (error) {
        setError('Failed to load data from NASA APIs');
        setLoading(false);
      }
       document.body.style.overflow = 'hidden';
  return () => {
    // Reset when leaving homepage
    document.body.style.overflow = 'auto';
  };
    };
    fetchData();
  }, []);

  if (loading) return <div className="homepage">Loading...</div>;
  if (error) return <div className="homepage">Error: {error}</div>;

  return (
    <div className="homepage" style={{ backgroundImage: apod ? `url(${apod.url})` : 'none' }}>
      <div className="overlay"></div> {/* Semi-transparent overlay for text visibility */}
      <h1>Welcome to NASA Data Explorer</h1>
      <p>Embark on a journey through the cosmos with stunning visuals and data from NASA.</p>
      <div className="featured-content">
        <div className="featured-card">
          <img src={apod ? apod.url : 'https://via.placeholder.com/300x200'} alt="Featured APOD" />
          <h3>Latest APOD</h3>
        </div>
        <div className="featured-card">
          <img src={marsPhoto ? marsPhoto.img_src : 'https://via.placeholder.com/300x200'} alt="Mars Rover" />
          <h3>Mars Rover Photos</h3>
        </div>
        <div className="featured-card">
          <img
            src={epicImage ? `https://epic.gsfc.nasa.gov/archive/natural/${epicImage.date.split(' ')[0].replace(/-/g, '/')}/png/${epicImage.image}.png` : 'https://via.placeholder.com/300x200'}
            alt="Earth from Space"
          />
          <h3>Earth Imagery</h3>
        </div>
      </div>
    </div>
  );
};

export default HomePage;