const httpStatus = require('http-status');
const pick = require('../utils/pick');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { routineService } = require('../services');

const createRoutine = catchAsync(async (req, res) => {
  const routine = await routineService.createRoutine(req.body, req.user);
  res.status(httpStatus.CREATED).send(routine);
});

const getRoutines = catchAsync(async (req, res) => {
  const routines = await routineService.getRoutinesByUser(req.user);
  if (!routines) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Routines not found');
  }
  res.send(routines);
});

const deleteRoutine = catchAsync(async (req, res) => {
  const result = await routineService.deleteRoutine(req.params.routineId);
  if (result.ok === 1) {
    res.sendStatus(httpStatus.OK);
  }
  throw new ApiError(httpStatus.NOT_FOUND, 'Routine not found');
});

const deleteTask = catchAsync(async (req, res) => {
  const result = await routineService.deleteTask(req.params.routineId, req.params.taskId);
  if (result.ok === 1) {
    return res.sendStatus(httpStatus.OK);
  }
  throw new ApiError(httpStatus.NOT_FOUND, 'Routine not found');
});

const updateRoutine = catchAsync(async (req, res) => {
  const result = await routineService.updateRoutine(req.params.routineId, req.body);
  if (result) {
    return res.sendStatus(httpStatus.OK);
  }
  throw new ApiError(httpStatus.NOT_FOUND, 'Routine not found');
});

module.exports = {
  createRoutine,
  getRoutines,
  deleteRoutine,
  deleteTask,
  updateRoutine
};
