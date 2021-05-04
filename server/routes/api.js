const express = require('express');
const router = express.Router();

const walletsRouter = require('../routes/wallets.router')
const socialsRouter = require('../routes/socials.router')




router.use("/wallets", walletsRouter);
router.use("/socials", socialsRouter);


router.use('*', (req, res, next)=>{
    res.status(404).json({
      error: 'Not found'
    })
  });
  
  
  module.exports = router;
  