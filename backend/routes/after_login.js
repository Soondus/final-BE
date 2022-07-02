
const express = require('express');
const router = express.Router();

const User = require('./models/user');
const Trip = require('./models/trip');


//once logged in
    router.post('/Tripdetails/:id',(req,res,next)=> {
        console.log(req.body); 

    //get all trips
    Trip.find({userId:req.params.id}).then(
        (trips) => {
            res.status(200).json(trips);
        }
    ).catch(
        (error) => {
            res.status(404).json({
                message: 'User not found!'
            });
        }
    );
    }
    );


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
                    message: 'Trip saved successfully!'
                });
            }) .catch(
            (error) => { res.status(400).json({
                error: error });
            }
        );

   //etails


    //mongoose allows us to modify things
    //allow user to change their details -- must be logged in

    router.put('/myaccount/:id', (req, res, next) => {
 //we need to create a new thing and 
 //update the thing in its position
 //but if we create a new thing it will create a new id
 
 const person = new User({
   _id: req.params.id,
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    carSize: req.body.carSize,
    fuelType: req.body.fuelType,
    userId: req.body.userId
 
 });
   User.updateOne({_id:req.params.id},thing).then(
     () => {
       res.status(201).json({
         message:'details updated successfully!'
       });
     }
   ).catch(
     (error) => {
       res.status(400).json({
         error: error
       });
     }
   //grab the fields from the req
   );
 });
 
 //next middleware with next 
 //mongoose allows us to retrieve things
 //now we will only intercept all the requests
 

   router.use((req, res, next) => {
    res.json({message: 'Your request was successful!'});
    
    next();
    });

    //user can see their points
    // on history route?

    router.use('/Points/:id',(req, res, next) => {
        Trip.findOne({points:req.body.points}).
        then(trip)}).catch(
            (error) => {
                res.status(400).json({
                    error: error
                });
            }
        );



 
 
 
 router.get('/Emissions')
 router.get('//Emissions')
 router.get('/History')

 router.get('/' +
  '', (req, res, next) => {
  Thing.find().then(
    (things) => {
      res.status(200).json(things);
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
 