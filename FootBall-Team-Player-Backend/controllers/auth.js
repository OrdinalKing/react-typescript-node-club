const jwt = require('jsonwebtoken');

const config = require('../config');
const User = require('../models/user');

function generateToken(user) {
  return jwt.sign(user, config.secretOrKey, {
    expiresIn: 60 * config.jwtExpireMinutes,
  });
}

exports.login = (req, res) => {
  const { email, password } = req.body;

  User.findOne({ email }, (err, user) => {
    if (err) return next(err);

    if (!user) return res.status(401).json({ message: 'User not found!' });

    user.comparePassword(password, (err, isMatch) => {
      if (err)
        return res
          .status(500)
          .json({ message: 'Something went wrong, please try again' });

      if (!isMatch)
        return res
          .status(401)
          .json({ message: 'Email or password is not correct!' });

      const userInfo = {
        email: user.email,
        firstname: user.firstname,
        lastname: user.lastname,
      };
      return res.json({
        message: 'Login success',
        user: userInfo,
        token: `JWT ${generateToken(userInfo)}`,
      });
    });
  });
};

exports.register = (req, res, next) => {
  const { email, password, firstname, lastname } = req.body;

  User.findOne({ email }, (err, existingUser) => {
    if (err) return next(err);

    if (existingUser) {
      return res.status(422).send({ message: 'This email is already in use.' });
    }
    const user = new User({ email, password, firstname, lastname });

    user.save((err, newUser) => {
      if (err) return next(err);

      const userInfo = {
        email,
        firstname,
        lastname,
      };
      res.json({
        message: 'Register success!',
        token: `JWT ${generateToken(userInfo)}`,
        user: userInfo,
      });
    });
  });
};

exports.getProfile = (req, res) => {
  User.findOne({ email: req.user.email })
    .then((user) => {
      const userInfo = {
        email: user.email,
        firstname: user.firstname,
        lastname: user.lastname,
      };

      res.json({
        success: true,
        user: userInfo,
      });
    })
    .catch(() => {
      res.status(404).send({ message: 'User not found' });
    });
};

exports.logout = (req, res) => {
  req.logout();
  res.json({ message: 'Success' });
};
