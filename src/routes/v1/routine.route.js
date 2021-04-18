const express = require('express');
const auth = require('../../middlewares/auth');
const validate = require('../../middlewares/validate');
const routineValidation = require('../../validations/routine.validation');
const routineController = require('../../controllers/routine.controller');

const router = express.Router();

router
  .route('/')
  .post(auth(), validate(routineValidation.createRoutine), routineController.createRoutine);

router
  .route('/')
  .get(auth(), routineController.getRoutines);

router
  .route('/:routineId')
  .delete(auth(), routineController.deleteRoutine);

router
  .route('/:routineId/task/:taskId')
  .delete(auth(), validate(routineValidation.deleteTask), routineController.deleteTask);

module.exports = router;
