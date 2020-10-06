const express = require('express');
const { validate } = require('express-validation');

const authController = require('../controllers/auth');
const { requireAuth } = require('../middlewares/auth');
const { login, register } = require('../utils/validations');

const router = express.Router();

router.post(
  '/login',
  validate(login, { context: false, statusCode: 400, keyByField: true }),
  authController.login
);

router.post(
  '/register',
  validate(register, { context: false, statusCode: 400, keyByField: true }),
  authController.register
);

router.get('/user', requireAuth, authController.getProfile);

router.get('/logout', authController.logout);

module.exports = router;
