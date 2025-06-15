// === models/Investment.js ===
const mongoose = require('mongoose');
const investmentSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  amount: Number,
  daily: Number,
  total: Number,
  startDate: { type: Date, default: Date.now },
});
module.exports = mongoose.model('Investment', investmentSchema);