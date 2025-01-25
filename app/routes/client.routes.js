const express = require('express');
const router = express.Router();
const clientController = require('../controllers/client.controller');
const { authenticate } = require('../middlewares/auth.middleware');

router.post('/', authenticate, clientController.createClient);
router.get('/', authenticate, clientController.getAllClients);
router.get('/:id', authenticate, clientController.getClientById);
router.put('/:id', authenticate, clientController.updateClient);
router.delete('/:id', authenticate, clientController.deleteClient);

module.exports = router;