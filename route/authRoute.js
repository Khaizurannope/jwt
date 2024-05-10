const express = require('express');
const router = express.Router();

const { register, login, me } = require('../Controllers/AuthController');

const verifyToken = require('../middleware/verifyToken');

router.post('/register', register);
router.post('/login', login);
router.get('/me', verifyToken, me);

module.exports = router;