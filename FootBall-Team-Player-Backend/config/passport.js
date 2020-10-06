const passport = require('passport');
const JwtStrategy = require('passport-jwt').Strategy;
const { ExtractJwt } = require('passport-jwt');

const User = require('../models/user');
const config = require('.');

const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme('jwt'),
  secretOrKey: config.secretOrKey,
};

const jwtLogin = new JwtStrategy(jwtOptions, (payload, next) => {
  User.findOne({ email: payload.email }, (err, user) => {
    if (err) {
      return next(err, false);
    }

    if (user) {
      return next(null, user);
    }

    return next(null, false);
  });
});

passport.use(jwtLogin);
