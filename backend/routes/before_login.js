//separate get routes and post routes

const express = require('express');
const router = express.Router();


const Person = require('../models/user');
const Trip = require('../models/trip');

//its going to receive a thing from the request body parser
//homepage
router.post('/',(req,res,next)=> {
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
      Person.findById(req.params.id).then(
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

      const person = new Person({
        _id: req.params.id,
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        carSize: req.body.carSize,
        fuelType: req.body.fuelType,
        userId: req.body.userId
      });
      Person.updateOne(req.params.id).then(
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
    Person.deleteOne({
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

    
  router.get('/sign-up', (req, res, next) => {
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
  
//if user already registered
//sign-in
router.find('/sign-in',(req, res, next) => {
    person.findOne({email:req.body.email}).then(
        (thing) => {
        res.status(200).json(thing);
        }
    ).catch(
        (error) => {
        res.status(400).json({
            error:error
          });
        }
    );
      });
  
      module.exports = router; //export the router
