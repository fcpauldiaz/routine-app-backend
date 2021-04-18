const mongoose = require('mongoose');
const { toJSON } = require('./plugins');

const routineSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: false,
      trim: true,
    },
    tasks: [
      {
        type: { type: String },
        time: { type: String },
      },
    ],
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
routineSchema.plugin(toJSON);

/**
 * @typedef Routine
 */
const Routine = mongoose.model('Routine', routineSchema);

module.exports = Routine;
