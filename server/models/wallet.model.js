const mongoose = require('mongoose');

var Schema = mongoose.Schema;

const CoinsSchema = new Schema({
    coin: String,
    purchase_price: Number,
    sold: Boolean,
    sold_price: Number,
    margin: Number,
    coin_sold: Number,
}
);

var WalletSchema = new Schema({
email: {type: String, required: true},
picture: {type: String, required: true},
nickname:{type: String, required: true},
name:{type: String, required: true, index:true},
user_created:{type: Date, required: true},
idSub:{type: String, required: true},
coins: [{
    type: CoinsSchema

}],

      },
      {
        timestamps: true
      });
      
      module.exports = mongoose.model('wallets', WalletSchema);
