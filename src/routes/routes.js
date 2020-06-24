const express = require('express');
//const navControllers = require('../controllers/')
const router = express.Router();

router.get('/',(req,res) => { res.render('LandingPage')});
router.get('/help',(req,res) => { res.render('Ayuda')});
router.get('/login',(req,res) => { res.render('Login')});
router.get('/perfil',(req,res) => { res.render('perfil')});
router.get('/registro',(req,res) => { res.render('Registro')});
router.get('/passchange',(req,res) => { res.render('CambiarPass')});
router.get('/cobertura',(req,res) => { res.render('cobertura')});
router.get('/sugerencias',(req,res) => { res.render('sugerencias')});
router.get('/supermercados',(req,res) => { res.render('supermercados')});


module.exports = router;