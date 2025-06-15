// === routes/user.js ===
const express = require('express');
const router = express.Router();
const { getProfile } = require('../controllers/user');

router.get('/profile', getProfile);
module.exports = router;