const mongoose = require('mongoose');

const { Schema } = mongoose;

const contentSchema = new Schema({
  audio_one: String,
  audio_two: String,
  audio_three: String,
  audio_four: String,
  ella: String,
  low: String,
  high: String,
  breath: String,
  strong: String,
  light: String,
});

const Content = mongoose.model('Content', contentSchema);
module.exports = Content;
