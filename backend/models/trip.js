const mongoose = require('mongoose');

//contains all the fields our model is going to contain
const tripSchema = mongoose.Schema({
    carSize: { type: String, required: true },
    userId: { type: String, required: true,unique:true },
    fuelCost: { type: Number, required: true },
    fuelType:{ type: String, required: true },
    coinsTotal:{ type: Number, required: true },
    co2emission_total:{ type: Number, required: true },
    coinsEarned: { type: Number, required: true },
    date:{ type: String, required: true },
    time:{ type: Number, required: true },
    co2emission:{ type: Number, required: true },
    distance:{type: Number, required: true },
    dailyLimit:{type: Number, required: true },
  
  });
  //id automatically generated
  //we can now import this model into our app
  
  module.exports = mongoose.model('Trip', tripSchema);