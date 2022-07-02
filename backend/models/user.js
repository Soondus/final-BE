//we need to import this on the app.js file
const mongoose = require('mongoose');

const uniqueValidator = require('mongoose-unique-validator');

//contains all the fields our model is going to contain
const userSchema = mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true ,unique:true},
    hashedPassword: { type: String, required: true },
    carSize: { type: String, required: true },
    userId: { type: String, required: true,unique:true },
    fuelCost: { type: Number, required: true },
    fuelType:{ type: String, required: true },
    coinsTotal:{ type: Number, required: true },
    co2emission_total:{ type: Number, required: true },

  });
  //id automatically generated
  //we can now import this model into our app
  userSchema.plugin(uniqueValidator);
  module.exports = mongoose.model('person', userSchema);