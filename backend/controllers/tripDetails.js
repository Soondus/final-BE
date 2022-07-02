
const Trip = require('../models/tripDetails');

exports.createTrip = (req,res,next)=> {
    const trip = new Trip({
     carSize: req.body.carSize,
     fuelType: req.body.fuelType,
     distance: req.body.distance,  
     co2emission_total: req.body.co2emissions,
     co2emissions: req.body.co2emissions,
     dailyLimit: req.body.dailyLimit,
     date: req.body.date,
     time: req.body.time,
     userId: req.body.userId
   });                                              
 trip.save().then(
 () => {
   res.status(201).json({
     message:"user saved successfully!"
   });
 }
 ).catch(
   (error) => {
     res.status(400).json({
       error:error
     });
   }
 );
};

exports.getOneTrip = (req, res, next) => {
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
  }

  exports.modifyTrip = (req, res, next) => {
    const trip = new Trip({
      _id: req.params.id,
        co2emission_total: req.body.co2emissions,
        co2emissions: req.body.co2emissions,
        dailyLimit: req.body.dailyLimit,
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
  };

    exports.deleteTrip = (req, res, next) => {
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
    }

    exports.getAllTrips = (req, res, next) => {
        Trip.findOne().then(
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
      }

