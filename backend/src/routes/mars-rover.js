const express = require('express');
const axios = require('axios');
const router = express.Router();
const { NASA_API_KEY } = require('../config');

router.get('/', async (req, res) => {
  const { sol } = req.query;
  try {
    const response = await axios.get(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=${sol || 1000}&api_key=${NASA_API_KEY}`);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching Mars rover photos' });
  }
});

module.exports = router;