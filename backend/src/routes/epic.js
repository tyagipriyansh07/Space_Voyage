const express = require('express');
const axios = require('axios');
const router = express.Router();
const { NASA_API_KEY } = require('../config');

router.get('/', async (req, res) => {
  try {
    const response = await axios.get(`https://api.nasa.gov/EPIC/api/natural?api_key=${NASA_API_KEY}`);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching EPIC data' });
  }
});

module.exports = router;