// === models/User.js ===
const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
  phone: { type: String, unique: true },
  password: String,
  balance: { type: Number, default: 0 },
  referrals: { type: [String], default: [] },
});
module.exports = mongoose.model('User', userSchema);
