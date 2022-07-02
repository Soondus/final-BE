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

//can be accessed by both sides of the app
exports.login = (req, res, next) => {
    //make sure user exists
    User.findOne({ email: req.body.email }).then(
        (user) => {
            if (!user) {
                return res.status(401).json({
                    error: new Error('User not found!')
                });
            }
            //user exists, check password
            bcrypt.compare(req.body.password, user.password).then(
                (valid) => {
                    if (!valid) {
                        return res.status(401).json({
                            error: new Error('Invalid password!')
                        });
                    }
                    //password is correct, send token
                    res.status(200).json({
                        userId: user._id,
                        token:'token' //generic token for now
                    });
                }
                //if bcrypt goes wrong send back error
            ).catch(
                (error) => {
                    res.status(500).json({
                        error: error
                    });
                }
            );
        }
        //if user does not exist send back error
    ).catch(
        (error) => {
            res.status(500).json({
                error: error
            });
        }
    );

};

//no log out as using token based authentication (more secure than sessions and tokens)
//installed npm bcryptjs