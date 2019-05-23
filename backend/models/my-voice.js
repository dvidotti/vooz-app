const mongoose = require('mongoose');

const { Schema } = mongoose;

const myVoiceSchema = new Schema({
  username: String,
  password: String,
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
});

const MyVoice = mongoose.model('MyVoice', myVoiceSchema);
module.exports = MyVoice;
