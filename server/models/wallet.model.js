const mongoose = require('mongoose');

var Schema = mongoose.Schema;

const CoinsSchema = new Schema({
    title: {type: String, required: true},
    quantity:{type: Number, required: true},
    total_price:{type: Number, required: true},
});

var WalletSchema = new Schema(
    {
        email: {type: String, required: true},
        coin: {type: String, required: true},
        quantity:{type: Number, required: true},
        price:{type: Number, required: true},
    },
    {
        timestamps: true
      });
      
      module.exports = mongoose.model('wallets', WalletSchema);
