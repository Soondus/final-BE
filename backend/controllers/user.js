//import user model
const User = require('../models/user');

exports.signup = (req, res, next) => {

};


exports.login = (req, res, next) => {
};

//no log out as using token based authentication (more secure than sessions and tokens)
//installed npm bcryptjs