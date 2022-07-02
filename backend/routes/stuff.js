//separate get routes and post routes

const express = require('express');
const router = express.Router();

const person = require('./models/user');
//const trip = require('./models/trip');

//its going to receive a thing from the request body parser
router.post('/sign-up',(req,res,next)=> {
    console.log(req.body);
 
    //sign up
   const person = new person({
     name: req.body.name,
     email: req.body.email,
     password: req.body.password,
     
   });                                              
 person.save().then(
 () => {
   res.status(201).json({
     message:"post saved successfully!"
   });
 }
 ).catch(
   (error) => {
     res.status(400).json({
       error:error
     });
   }
 );
   });
 
   //after submitting nothing happens
   //next we will "get" what we entered into the database
   
 
 //mongoose allows us to modify things
 app.put('/api/stuff/:id', (req, res, next) => {
 //we need to create a new thing and 
 //update the thing in its position
 //but if we create a new thing it will create a new id
 
 const person = new person({
   _id: req.params.id,
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    userId: req.body.userId
 
 });
   person.updateOne({_id:req.params.id},thing).then(
     () => {
       res.status(201).json({
         message:'thing updated successfully!'
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
 
 
 app.get('/sign-up', (req, res, next) => {
   //leaving the find() empty as we want to retrieve everything from the db
   //then we send a promise to receive an array of all the things if available
   person.find().then(
       (things) => {
         res.status(200).json(things);
       }
     ).catch(
       (error) => {
         res.status(400).json({
           error:error
         });
       }
     );
   });
 
 app.get('/TripDetails')
 app.find('/TripDetails')
 app.find('/sign-in')
 app.find('/Points')
 app.get('/Emissions')
 app.find('//Emissions')
 app.find('/History')
 

module.exports = router;
