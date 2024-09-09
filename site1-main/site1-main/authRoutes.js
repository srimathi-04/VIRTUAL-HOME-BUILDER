const express = require('express');
const { login } = require('./c');

const router = express.Router();

// Route to log in a user
router.post('/login', login);

module.exports = router;
