const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController'); // Correct import
const authMiddleware = require('../middleware/authMiddleware'); // Ensure this middleware is used for protected routes

// Register route
router.post('/register', authController.registerUser);

// Login route
router.post('/login', authController.loginUser);

// Preferences route (protected, only accessible if the user is authenticated)
router.get('/preferences', authMiddleware, authController.getPreferences);

// Save preferences route (protected)
router.post('/preferences', authMiddleware, authController.savePreferences);

module.exports = router;
