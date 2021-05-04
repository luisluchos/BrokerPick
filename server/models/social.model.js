const mongoose = require('mongoose');

var Schema = mongoose.Schema;

const FollowsSchema = new Schema({
    id_follow: String,
    name_follow: String
}
);

var SocialSchema = new Schema({
email: {type: String, required: true},
id_user: {type: String, required: true},
nickname:{type: String, required: true},
name:{type: String, required: true, index:true},
idSub:{type: String, required: true},
follows: [{
    type: FollowsSchema

}],

      },
      {
        timestamps: true
      });
      
      module.exports = mongoose.model('social', SocialSchema);
