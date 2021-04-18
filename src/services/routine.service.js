const httpStatus = require('http-status');
const { Routine } = require('../models');
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

module.exports = {
  createRoutine,
  getRoutinesByUser,
  deleteRoutine,
};
