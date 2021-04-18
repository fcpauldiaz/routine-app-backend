const Joi = require('joi');
const { objectId } = require('./custom.validation');

const createRoutine = {
  body: Joi.object().keys({
    name: Joi.string().required(),
    tasks: Joi.array().required()
  }),
};

const deleteTask = {
  params: Joi.object().keys({
    routineId: Joi.string().required(),
    taskId: Joi.string().required()
  }),
};

module.exports = {
  createRoutine,
  deleteTask
};
