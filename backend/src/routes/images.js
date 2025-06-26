const express = require('express');
const axios = require('axios');
const router = express.Router();

router.get('/', async (req, res) => {
  const { q } = req.query;
  try {
    const response = await axios.get(`https://images-api.nasa.gov/search?q=${q || 'space'}`);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching images' });
  }
});

module.exports = router;