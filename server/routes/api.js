const express = require('express');
const router = express.Router();

const walletsRouter = require('../routes/wallets.router')




router.use("/wallets", walletsRouter);


router.use('*', (req, res, next)=>{
    res.status(404).json({
      error: 'Not found'
    })
  });
  
  
  module.exports = router;
  