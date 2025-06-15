// === routes/investments.js ===
const express = require('express');
const router = express.Router();
const { invest } = require('../controllers/investments');

router.post('/', invest);
module.exports = router;
