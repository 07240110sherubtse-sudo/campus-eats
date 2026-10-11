
const express = require('express');
const router = express.Router();
const apiController = require('../controllers/apiController');

// Import authentication middleware
const { requireAuthApi } = require('../middleware/auth');

router.get('/restaurants', apiController.getRestaurants);
router.get('/restaurants/:id/menu', apiController.getRestaurantMenu);
router.get('/orders/:id', apiController.getOrder);

// Protected order creation route
router.post('/orders', requireAuthApi, apiController.createOrder);

router.get('/stats', apiController.getStats);

module.exports = router;
