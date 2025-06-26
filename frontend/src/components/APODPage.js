import React, { useState, useEffect } from 'react';
import axios from 'axios';

const APODPage = () => {
  const [apod, setApod] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAPOD = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/apod');
        setApod(response.data);
        setLoading(false);
      } catch (error) {
        setError('Failed to load APOD data');
        setLoading(false);
      }
    };
    fetchAPOD();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="container">
      <div className="apod-container">
        <h1>Astronomy Picture of the Day</h1>
        {apod && (
          <>
            <h2 className="apod-title">{apod.title}</h2>
            {apod.media_type === 'image' ? (
              <img src={apod.url} alt={apod.title} className="apod-image" />
            ) : (
              <iframe title="APOD Video" src={apod.url} frameBorder="0" allowFullScreen className="apod-video"></iframe>
            )}
            <p className="apod-explanation">{apod.explanation}</p>
          </>
        )}
      </div>
    </div>
  );
};

export default APODPage;