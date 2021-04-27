const mongoose = require('mongoose');

var Schema = mongoose.Schema;

const CoinsSchema = new Schema({
    coin: String,
    purchase_price: Number,
    sold: Boolean,
    sold_price: Number,
    margin: Number
});

var WalletSchema = new Schema({
email: {type: String, required: true},
coins: [{
    type: CoinsSchema

}],

      });
      
      module.exports = mongoose.model('wallets', WalletSchema);
