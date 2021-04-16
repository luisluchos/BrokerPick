const walletModel = require('../models/wallet.model');

module.exports = {
  getWalletsByUser: (async (req, res, next) => {
    let user = req.query.user

    let wallets = await walletModel.find({"email": user});
    res.json({wallets: wallets});
  })
}
