const walletModel = require('../models/wallet.model');

module.exports = {
  getWalletsByUser: (async (req, res, next) => {
    let user = req.query.user

    let wallets = await walletModel.find({"email": user});
    res.json({wallets: wallets});
  }),

  editWallet: (async(req,res,next)=>{
   // let walletEmail = await walletModel.find({"email": user});
   console.log("body",req.body);
    payload = req.body;
    await walletModel.create(payload);
    res.redirect(200, '/wallet'); 

  }),
}

//$set. Este operador nos permite modificar (o crear si no existe) uno o varios campos sin tener que introducir el documento JSON completo.