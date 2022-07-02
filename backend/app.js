const express = require('express');
const app = express();
app.use(express.json());

const userRoutes = require('./routes/user');
const tripRoutes = require('./routes/trip');

const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://user0:PrVZsRbgCPkb7L8Y@trips.6eqhgof.mongodb.net/?retryWrites=true')
  .then(() => {
    console.log('Successfully connected to MongoDB Atlas!');
  })
  .catch((error) => {
    console.log('Unable to connect to MongoDB Atlas!');
    console.error(error);
  });

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

app.use('/api/auth', userRoutes);

module.exports = app;