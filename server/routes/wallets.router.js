const express = require('express');
const router = express.Router();

const walletsController = require('../controllers/wallets.controllers');

/**GET wallets */

router.get('/', walletsController.getWalletsByUser);

module.exports = router;
