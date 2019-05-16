const mongoose = require('mongoose');

const { Schema } = mongoose;

const myVoiceSchema = new Schema({
  level: String,
  range: String,
  intensity: String,
  air: String,
  style: String,
  record: String,
  artist: String,
  wishes: String,
  email: String,
  name: String,
  username: String,
  password: String,
});

const MyVoice = mongoose.model('MyVoice', myVoiceSchema);
module.exports = MyVoice;
