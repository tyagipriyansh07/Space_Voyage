const express = require('express');
const axios = require('axios');
const router = express.Router();
const { NASA_API_KEY } = require('../config');

router.get('/', async (req, res) => {
  const { start_date, end_date } = req.query;
  try {
    const response = await axios.get(`https://api.nasa.gov/neo/rest/v1/feed?start_date=${start_date}&end_date=${end_date}&api_key=${NASA_API_KEY}`);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching NEO data' });
  }
});

module.exports = router;