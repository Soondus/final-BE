const express = require('express');
const router = express.Router();

const tripCtrl = require('../controllers/tripDetails');

router.get('/' + '', tripCtrl.getAllTrips);
router.post('/', tripCtrl.createTrip);
router.get('/:id', tripCtrl.getOneTrip);
router.put('/:id', tripCtrl.modifyTrip);
router.delete('/:id', tripCtrl.deleteTrip);

  
module.exports = router;