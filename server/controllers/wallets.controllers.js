const walletModel = require('../models/wallet.model');

module.exports = {
  getWallets: (async (req, res, next) => {
    let wallets = await walletModel.find();
    res.json({wallets: wallets});
  })
}
