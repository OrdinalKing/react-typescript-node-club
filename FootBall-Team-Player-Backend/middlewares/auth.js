const passport = require('passport');

const requireAuth = passport.authenticate('jwt', {
  session: false,
  failWithError: true,
});

module.exports = {
  requireAuth,
};
