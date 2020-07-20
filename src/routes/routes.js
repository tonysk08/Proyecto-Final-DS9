const express = require('express');
//const navControllers = require('../controllers/')
const router = express.Router();
//Carrito de compras
const carritoCtrl = require('../controllers/carrito_controller');
const landingCtrl = require('../controllers/landingController');
const { token } = require('morgan');
//stripe
const stripe = require('stripe')('sk_test_51H5dA2KDd3ZOeKrKQtrJpYAYSS2X8AgqCBOg8zw85ttAb9Jaq3P2EYfz2K13SuoTlFHJLHVHtBAwJJF5zPSK6mii00xxkfhHuI');


//router.get('/',(req,res) => { res.render('LandingPage')});
router.get('/help',(req,res) => { res.render('Ayuda')});
router.get('/login',(req,res) => { res.render('Login')});
router.get('/profile',(req,res) => { res.render('Perfil')});
router.get('/registro',(req,res) => { res.render('Registro')});
router.get('/passchange',(req,res) => { res.render('RecuperarPass')});
router.get('/cobertura',(req,res) => { res.render('Cobertura')});
router.get('/sugerencias',(req,res) => { res.render('Sugerencias')});
router.get('/supermercados',(req,res) => { res.render('Supermercados')});
router.get('/Todos',(req,res) => { res.render('Todos')});
//router.get('/shoppingcart',(req,res) => { res.render('Carrito')});
router.get('/pago',(req,res) => { res.render('Pago')});
router.get('/paquetes',(req,res) => { res.render('Paquetes')});
router.get('/pedido',(req,res) => { res.render('Pedido')});
router.get('/favoritos',(req,res) => { res.render('Fav')});
router.get('/categorias',(req,res) => { res.render('Categorias')});
router.get('/newProduct',(req,res) => { res.render('NewProduct')});
router.get('/oferta',(req,res) => { res.render('Ofertas')});


router.get('/shoppingcart', carritoCtrl.list);
router.get('/', landingCtrl.list);

router.post('/checkout', async (req, res) => {
    
    //Controla el envio al dashboard de Stripe
    const customer = await stripe.customers.create({
        email: req.body.stripeEmail,
        source: req.body.stripeToken,
    });
  
    const charge = await stripe.charges.create({
        amount: req.body.amount,
        currency: 'usd',
        customer: customer.id,
        description: 'Compra de supermercado'       
    });
    
    //Respuesta final
    res.render('CompraCompletada');
  });


module.exports = router;