
const express = require('express');
const router = express.Router();


const Trip = require('./models/trip');

//"enter your trip details"
router.post('/:id', (req, res, next) => {
    const trip = new Trip({
        carSize: req.body.carSize,
        fuelType: req.body.fuelType,
        distance: req.body.distance,
        date: req.body.date,
        time: req.body.time,
        userId: req.body.userId
    });
    trip.save().then(
      () => {
        res.status(201).json({
          message: 'Post saved successfully!'
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
  
  router.get('/:id', (req, res, next) => {
    Trip.findOne({
      _id: req.params.id
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
  
  //modify trip
  router.put('/:id', (req, res, next) => {
    const trip = new Trip({
      _id: req.params.id,
        carSize: req.body.carSize,
        fuelType: req.body.fuelType,
        distance: req.body.distance,
        date: req.body.date,
        time: req.body.time,
        userId: req.body.userId
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
  
  //delete trip
  router.delete('/:id', (req, res, next) => {
    Trip.deleteOne({_id: req.params.id}).then(
      () => {
        res.status(200).json({
          message: 'Deleted!'
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


  //get all trips
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