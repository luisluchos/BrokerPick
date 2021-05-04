const express = require('express');
const router = express.Router();

const socialsController = require('../controllers/socials.controllers');


router.get('/', socialsController.getFollowsByUser);
router.post('/', socialsController.addfollow);



module.exports = router;
