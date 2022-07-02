const express = require('express');
const router = express.Router();

const Trip = require('./models/trip');


router.post('/', (req, res, next) => {
    const trip = new Trip({
        co2emission_total: req.body.co2emissions,
        co2emissions: req.body.co2emissions,
        dailyLimit: req.body.dailyLimit,
        date: req.body.date,
        time: req.body.time,
        userId: req.body.userId
    });
    thing.save().then(
      () => {
        res.status(201).json({
          message: 'Trip details saved successfully!'
        });
      }
    ).catch(
      (error) => {
        res.status(400).json({
          error: error
        });
      }
    );
  });


//request co2emissions, dailyLimit, date, time,
  router.get('/:id', (req, res, next) => {
    Trip.find({
      _id: req.params.id,
        co2emission_total: req.body.co2emissions,
        co2emissions: req.body.co2emissions,
        dailyLimit: req.body.dailyLimit,
        date: req.body.date,
        time: req.body.time,
    }).then(
      (trip) => {
        res.status(200).json(trip);
      }
    ).catch(
      (error) => {
        res.status(404).json({
          error: error
        });
      }
    );
  });
  
  //modify co2 emissions
  router.put('/:id', (req, res, next) => {
    const trip = new Trip({
      _id: req.params.id,
      co2emission_total: req.body.co2emissions,
      co2emissions: req.body.co2emissions,
      dailyLimit: req.body.dailyLimit,
      date: req.body.date,
      time: req.body.time,
    });
    Trip.updateOne({_id: req.params.id}, trip).then(
      () => {
        res.status(201).json({
          message: 'Thing updated successfully!'
        });
      }
    ).catch(
      (error) => {
        res.status(400).json({
          error: error
        });
      }
    );
  });


  //get all info about a emissions
  router.get('/' +
    '', (req, res, next) => {
    Trip.find().then(
      (trip) => {
        res.status(200).json(trip);
      }
    ).catch(
      (error) => {
        res.status(400).json({
          error: error
        });
      }
    );
  });
  
  module.exports = router;