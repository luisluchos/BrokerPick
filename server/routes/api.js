const express = require('express');
const router = express.Router();


router.get('/trades', function(req, res, next) {
  res.json({comments: [{id: 1, name: 'me'}]})
});


router.use('*', (req, res, next)=>{
    res.status(404).json({
      error: 'Not found'
    })
  });
  
  
  module.exports = router;
  