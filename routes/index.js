const express = require('express');
const router = express.Router();

const homeController = require('../controllers/homeController');
const aboutController = require('../controllers/aboutController');
const orderController = require('../controllers/orderController');
const menuController = require('../controllers/menuController');

router.get('/', homeController.getHome);
router.get('/about', aboutController.getAbout);
router.post('/orders', orderController.createOrder);
router.get('/restaurants/:id/menu', menuController.getMenuByRestaurant);
module.exports = router;