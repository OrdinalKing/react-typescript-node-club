const { Joi } = require('express-validation');

module.exports = {
  register: {
    body: Joi.object({
      firstname: Joi.string().required().pattern(new RegExp('[a-zA-Z]+$')),
      lastname: Joi.string().required().pattern(new RegExp('[a-zA-Z]+$')),
      email: Joi.string().email().required(),
      password: Joi.string().required().min(8).max(128),
    }),
  },
  login: {
    body: Joi.object({
      email: Joi.string().email().required(),
      password: Joi.string().required().max(128),
    }),
  },
};
