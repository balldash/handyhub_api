const express = require('express');
const router = express.Router();
const tradesmanController = require('../controllers/tradesman.controller');


router.post('/', tradesmanController.createTradesman);
router.get('/', tradesmanController.getAllTradesmen);
router.get('/:id', tradesmanController.getTradesmanById);
router.put('/:id', tradesmanController.updateTradesman);
router.delete('/:id', tradesmanController.deleteTradesman);

module.exports = router;