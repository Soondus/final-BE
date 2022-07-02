const mongoose = require('mongoose');

//contains all the fields our model is going to contain
const tripSchema = mongoose.Schema({
    coinsEarned: { type: Number, required: true },
    date:{ type: String, required: true },
    time:{ type: Number, required: true },
    co2emission:{ type: Number, required: true },
    distance:{type: Number, required: true },

  });
  //id automatically generated
  //we can now import this model into our app
  
  module.exports = mongoose.model('trip', tripSchema);