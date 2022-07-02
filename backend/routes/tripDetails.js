const express = require('express');
const router = express.Router();
const Trip = require('../models/trip');

const tripControl = require('../controllers/tripDetails');

router.get('/', tripControl.getTrip);
router.post('/:id', tripControl.createTrip);
router.get('/:id' + '', tripControl.getAllTrips);
router.put('/:id', tripControl.modifyTrip);
router.delete('/:id', tripControl.deleteTrip);

  
module.exports = router;