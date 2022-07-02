//we need to import this on the app.js file
const mongoose = require('mongoose');

const uniqueValidator = require('mongoose-unique-validator');

//contains all the fields our model is going to contain
const userSchema = mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true ,unique:true},
    hashedPassword: { type: String, required: true ,unique:true},

  });
  //id automatically generated
  //we can now import this model into our app
  userSchema.plugin(uniqueValidator);

  //module.exports = mongoose.model('User', userSchema);