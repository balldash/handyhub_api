const express = require('express');
const router = express.Router();
const tradesmanController = require('../controllers/tradesman.controller');
const { authenticate } = require("../middlewares/auth.middleware");

router.post('/', authenticate, tradesmanController.createTradesman);
router.get('/', authenticate, tradesmanController.getAllTradesmen);
router.get('/:id', authenticate, tradesmanController.getTradesmanById);
router.put('/:id', authenticate, tradesmanController.updateTradesman);
router.delete('/:id', authenticate, tradesmanController.deleteTradesman);

module.exports = router;