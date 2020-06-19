const express = require('express');
//const navControllers = require('../controllers/')
const router = express.Router();

router.get('/',(req,res) => { res.render('LandingPage')});

module.exports = router;