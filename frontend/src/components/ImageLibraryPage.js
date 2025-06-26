import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ImageLibraryPage = () => {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState('space');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/images?q=${query}`);
        setImages(response.data.collection.items);
        setLoading(false);
      } catch (error) {
        setError('Failed to load images');
        setLoading(false);
      }
    };
    fetchImages();
  }, [query]);

  const handleSearch = (e) => {
    e.preventDefault();
    setQuery(e.target.elements.search.value);
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="container">
      <h1>Space Gallery</h1>
      <form onSubmit={handleSearch}>
        <input type="text" name="search" placeholder="Search images..." />
        <button type="submit">Search</button>
      </form>
      <div className="gallery">
        {images.map((item) => (
          <div key={item.data[0].nasa_id} className="gallery-item">
            <img src={item.links[0].href} alt={item.data[0].title} />
            <h3>{item.data[0].title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageLibraryPage;