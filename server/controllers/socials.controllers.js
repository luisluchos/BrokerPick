const socialModel = require('../models/social.model');

module.exports = {

    getFollowsByUser: (async (req, res, next) => {
        let user = req.query.user
        console.log("user:", user);
        let follows = await socialModel.find({"idSub": user});

        res.json({follows: follows});
      }),

    addfollow: (async(req,res,next)=>{
        
        console.log("Follow",req.body);
         payload = req.body;
         
         await socialModel.updateOne({idSub: payload.idSub, email: payload.email,name: payload.name, nickname: payload.nickname}, 
                                     {$push : {follows: [{id_follow: payload.id_follow, name_follow: payload.name_follow}]}},
                                     {upsert: true, setDefaultsOnInsert: true});
         res.redirect(200, '/socials'); 
       }),


}