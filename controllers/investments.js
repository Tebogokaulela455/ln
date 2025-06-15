// === controllers/investments.js ===
const Investment = require('../models/Investment');
const User = require('../models/User');

const plans = { 5: 0.1, 8: 0.4, 12: 0.7, 15: 0.9, 20: 1.0, 30: 1.2, 40: 1.5 };

exports.invest = async (req, res) => {
  const { userId, amount } = req.body;
  if (!plans[amount]) return res.status(400).send('Invalid amount');
  const daily = plans[amount];
  const total = daily * 28;
  const investment = new Investment({ user: userId, amount, daily, total });
  await investment.save();
  await User.findByIdAndUpdate(userId, { $inc: { balance: -amount } });
  res.json({ msg: 'Investment started', daily, total });
};