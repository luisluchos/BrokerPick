const express = require('express');
const router = express.Router();

const walletsController = require('../controllers/wallets.controllers');



router.get('/', walletsController.getWalletsByUser);
router.post('/', walletsController.addWallet);

router.post('/sellCoin', walletsController.sellCoin);
router.get('/usersWallets', walletsController.getAllWallets);
router.get('/userMargin', walletsController.getMarginByUser);
router.get('/usersMargin', walletsController.getAllMargins);
router.get('/usersName', walletsController.getMarginByUserName);


module.exports = router;
