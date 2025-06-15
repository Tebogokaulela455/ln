// === controllers/auth.js ===
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.register = async (req, res) => {
  const { phone, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 12);
  const user = new User({ phone, password: hashedPassword });
  await user.save();
  res.status(201).send('User registered');
};

exports.login = async (req, res) => {
  const { phone, password } = req.body;
  const user = await User.findOne({ phone });
  if (!user) return res.status(400).send('Invalid credentials');
  const match = await bcrypt.compare(password, user.password);
  if (!match) return res.status(400).send('Invalid credentials');
  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
  res.json({ token });
};