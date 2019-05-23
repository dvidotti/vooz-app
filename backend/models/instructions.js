const mongoose = require('mongoose');

const { Schema } = mongoose;

const instructionsSchema = new Schema({
  level: [String],
  range: [String],
  intensity: [String],
});

const Instructions = mongoose.model('Instructions', instructionsSchema);
module.exports = Instructions;
