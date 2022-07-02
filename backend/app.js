const express = require('express');
const parser = require('body-parser');
const mongoose = require('mongoose');
const Trip = require('./models/trip');
const tripRoutes = require('./routes/tripDetails');
const userRoutes = require('./routes/user');

const app = express();

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

app.use('/api/tripDetails', tripRoutes);
app.use('/api/auth', userRoutes);


module.exports = app;