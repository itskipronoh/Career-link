const express = require('express');
const router = express.Router();
const userController = require('../controllers/UserController');
const auth = require('../middleware/auth'); // Middleware for protecting routes

router.post('/register', userController.registerUser);
router.post('/login', userController.loginUser);
router.get('/profile', auth, userController.getUserProfile);

module.exports = router;
