const walletModel = require('../models/wallet.model');

module.exports = {
  getWalletsByUser: (async (req, res, next) => {
    let user = req.query.user

    let wallets = await walletModel.find({"email": user});
    res.json({wallets: wallets});
  }),

  addWallet: (async(req,res,next)=>{
   // let walletEmail = await walletModel.find({"email": user});
   console.log("bpurchase",req.body);
    payload = req.body;
    
    await walletModel.updateOne({email: payload.email}, {$push : {coins: [{coin: payload.coin, purchase_price: payload.purchase_price, sold:payload.sold}]}},{upsert: true, setDefaultsOnInsert: true});
    res.redirect(200, '/wallet'); 

  }),

  sellCoin: (async(req,res,next)=>{
    console.log("sell",req.body);
    payload= req.body;

    await walletModel.findOneAndUpdate({'coins._id':payload.id}, {'coins.$.sold' : payload.sold},{upsert: true})
    res.json({users: payload});
  })
}

// the setDefaultOnInsert option to also apply defaults if the upsert creates a new document.