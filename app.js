// === app.js ===
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const authRoutes = require('./routes/auth');
const investmentRoutes = require('./routes/investments');
const userRoutes = require('./routes/user');

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB error:', err));

app.use('/api/auth', authRoutes);
app.use('/api/investments', investmentRoutes);
app.use('/api/user', userRoutes);

app.listen(5000, () => console.log('Server running on port 5000'));