const express = require('express');
const cors = require('cors');
const apodRoutes = require('./routes/apod');
const imagesRoutes = require('./routes/images');
const epicRoutes = require('./routes/epic');
const neowsRoutes = require('./routes/neows');
const marsRoverRoutes = require('./routes/mars-rover');

const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use('/api/apod', apodRoutes);
app.use('/api/images', imagesRoutes);
app.use('/api/epic', epicRoutes);
app.use('/api/neows', neowsRoutes);
app.use('/api/mars-rover', marsRoverRoutes);

module.exports = app;