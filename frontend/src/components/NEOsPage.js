import React, { useState, useEffect } from 'react';
import axios from 'axios';

const NEOsPage = () => {
  const [neos, setNeos] = useState([]);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNEOs = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/neows?start_date=${startDate}&end_date=${endDate}`);
        setNeos(Object.values(response.data.near_earth_objects).flat());
        setLoading(false);
      } catch (error) {
        setError('Failed to load NEO data');
        setLoading(false);
      }
    };
    fetchNEOs();
  }, [startDate, endDate]);

  const handleFilter = (e) => {
    e.preventDefault();
    setStartDate(e.target.elements.startDate.value);
    setEndDate(e.target.elements.endDate.value);
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="container">
      <h1>Near Earth Objects</h1>
      <form onSubmit={handleFilter}>
        <input type="date" name="startDate" placeholder="Start Date" />
        <input type="date" name="endDate" placeholder="End Date" />
        <button type="submit">Filter</button>
      </form>
      <table className="neo-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Close Approach Date</th>
            <th>Estimated Diameter (km)</th>
          </tr>
        </thead>
        <tbody>
          {neos.map((neo) => (
            <tr key={neo.id}>
              <td>{neo.name}</td>
              <td>{neo.close_approach_data[0]?.close_approach_date}</td>
              <td>{neo.estimated_diameter.kilometers.estimated_diameter_max}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default NEOsPage;