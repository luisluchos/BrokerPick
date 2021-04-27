const express = require('express');
const router = express.Router();

const walletsController = require('../controllers/wallets.controllers');

/**GET wallets */

router.get('/', walletsController.getWalletsByUser);

router.post('/', walletsController.addWallet);

router.post('/sellCoin', walletsController.sellCoin);

module.exports = router;
