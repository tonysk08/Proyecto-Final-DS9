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
router.get('/sugerencias',(req,res) => { res.render('Sugerencias')});
router.get('/supermercados',(req,res) => { res.render('supermercados')});
router.get('/Todos',(req,res) => { res.render('Todos')});
router.get('/shoppingcart',(req,res) => { res.render('carrito')});
router.get('/pago',(req,res) => { res.render('pago')});
router.get('/paquetes',(req,res) => { res.render('paquetes')});
router.get('/pedido',(req,res) => { res.render('pedido')});
router.get('/fav',(req,res) => { res.render('fav')});
router.get('/categorias',(req,res) => { res.render('categorias')});
router.get('/newProduct',(req,res) => { res.render('NewProduct')});
router.get('/oferta',(req,res) => { res.render('Ofertas')});

module.exports = router;