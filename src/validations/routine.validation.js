const Joi = require('joi');
const { objectId } = require('./custom.validation');

const createRoutine = {
  body: Joi.object().keys({
    name: Joi.string().required(),
    tasks: Joi.array().required()
  }),
};

module.exports = {
  createRoutine,
};
