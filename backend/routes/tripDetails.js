const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const tripCtrl = require('../controllers/tripDetails');

//all these routes require authentication
router.get('/',auth, tripCtrl.getAllTrips);
router.post('/',auth, tripCtrl.createTrip);
router.get('/:id',auth, tripCtrl.getOneTrip);
router.put('/:id',auth, tripCtrl.modifyTrip);
router.delete('/:id',auth, tripCtrl.deleteTrip);

  
module.exports = router;