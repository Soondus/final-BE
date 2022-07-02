
const express = require('express');
const router = express.Router();

const person = require('./models/user');
const trip = require('./models/trip');
const { find } = require('../models/user');


//once logged in
    /*enter trip details
    router.get('/TripDetails'(req, res, next) => {
        trip.find().then(

        });


    router.find('/TripDetails')

*/
 //mongoose allows us to modify things
 //allow user to change their details -- must be logged in

 app.put('/:id', (req, res, next) => {
 //we need to create a new thing and 
 //update the thing in its position
 //but if we create a new thing it will create a new id
 
 const person = new person({
   _id: req.params.id,
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    carSize: req.body.carSize,
    fuelType: req.body.fuelType,
    userId: req.body.userId
 
 });
   person.updateOne({_id:req.params.id},thing).then(
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
 

   app.use((req, res, next) => {
    res.json({message: 'Your request was successful!'});
    
    next();
    });

    //user can see their points
    // on history route?

    router.find('/Points/:id',(req, res, next) => {
        person.findOne({points:req.body.points}).
        then(person)}).catch(
            (error) => {
                res.status(400).json({
                    error: error
                });
            }
        );



 
 
 
 router.get('/Emissions')
 router.find('//Emissions')
 router.find('/History')
 

 module.exports = router;
