const express = require('express');

const app = express();

app.use(express.json());

const mongoose = require('mongoose');
const person = require("./models/user");
const trip = require("./models/trip");


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

app.post('/api',(req, res, next) => {
    console.log('Request received');
    res.json({message: "Hello from server!"});
    next();
});

app.get('/api',(req, res, next) => {
    res.status(201);
    next();
});

app.use((req, res, next) => {
    res.json({message: 'Your request was successful!'});
    
    next();
});

app.use((req, res, next) => {
    console.log('Request sent successfully!');
    
});



module.exports = app;