//separate get routes and post routes

const express = require('express');
const router = express.Router();


const User = require('../models/user');
const Trip = require('../models/trip');

//its going to receive a thing from the request body parser
//homepage
router.post('/',(req,res,next)=> {
    console.log(req.body);
 
    //sign up
   const person = new User({
     name: req.body.name,
     email: req.body.email,
     password: req.body.password,
     
   });                                              
 person.save().then(
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
   });
 
   router.get('/:id', (req, res, next) => {
    User.findById(req.params.id).then(
        (person) => {
          res.status(200).json(person);
        }
      ).catch(
        (error) => {
          res.status(404).json({
            message: 'User not found!'
          });
        }
      );
    });
    
    router.put('/:id', (req, res, next) => {

      const person = new User({
        _id: req.params.id,
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        userId: req.body.userId
      });
      User.updateOne(req.params.id).then(
        () => {
          res.status(201).json({
            message: 'User updated successfully!'
          });
        }
      ).catch((error) => {
        res.status(400).json({
          error: error
        });
      }
    );
  });

    //if user wants to delete their account
  router.delete('/:id', (req, res, next) => {
    User.deleteOne({
      _id: req.params.id
    }).then(() => {
      res.status(200).json({
        message: 'User deleted successfully!'
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
);

  
//if user already registered
//sign-in
router.get('/' +
    '', (req, res, next) => {
      User.find().then(
      (person) => {
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
  
 
  module.exports = router; //export the router
