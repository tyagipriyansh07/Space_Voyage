import React, { useState, useEffect } from 'react';
import axios from 'axios';

const EPICPage = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEPIC = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/epic');
        setImages(response.data);
        setLoading(false);
      } catch (error) {
        setError('Failed to load EPIC data');
        setLoading(false);
      }
    };
    fetchEPIC();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="container">
      <div className="epic-container">
        <h1>Earth from Space</h1>
        {images.map((item) => (
          <div key={item.identifier}>
            <img
              src={`https://epic.gsfc.nasa.gov/archive/natural/${item.date.split(' ')[0].replace(/-/g, '/')}/png/${item.image}.png`}
              alt={item.caption}
              className="epic-image"
            />
            <h3 className="epic-caption">{item.caption}</h3>
            <p className="epic-date">{item.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EPICPage;