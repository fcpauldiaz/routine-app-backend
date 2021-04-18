const httpStatus = require('http-status');
const { Routine } = require('../models');
const { ObjectId } = require('mongodb');
const ApiError = require('../utils/ApiError');

/**
 * Create a routine
 * @param {Object} routineBody
 * @param {Object} user
 * @returns {Promise<Routine>}
 */
const createRoutine = async (routineBody, user) => {
  const routine = await Routine.create({
    ...routineBody,
    user
  });
  return routine;
};

/**
 * Get user by userId
 * @param {Object} user
 * @returns {Promise<Routine>}
 */
const getRoutinesByUser = async (user) => {
  return Routine.find({ user });
};

/**
 * Delete routine
 * @param {String} routineId
 * @returns {Promise<Routine>}
 */

const deleteRoutine = async (routineId) => {
  const result = await Routine.deleteOne({ _id: routineId });
  return result;
}

/**
 * Delete Task
 * @param {String} routineId
 * @param {String} taskId
 * @returns {Promise<Routine>}
 */

const deleteTask = async (routineId, taskId) => {
  console.log(routineId, taskId);
  const result = await Routine.updateOne({ _id: routineId },
  { $pull: { tasks: { _id: ObjectId(taskId) } } }).exec();
  return result;
}


module.exports = {
  createRoutine,
  getRoutinesByUser,
  deleteRoutine,
  deleteTask
};
