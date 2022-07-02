const bcrypt = require('bcrypt');
//import user model
const User = require('../models/user');


exports.signup = (req, res, next) => {
    bcrypt.hash(req.body.password, 10).then(
        (hash) => {
            const user = new User({
                email: req.body.email,
                password: hash
            });
            user.save().then(() => {
                res.status(201).json({
                    message: 'User added successfully!'
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
};


exports.login = (req, res, next) => {
};

//no log out as using token based authentication (more secure than sessions and tokens)
//installed npm bcryptjs