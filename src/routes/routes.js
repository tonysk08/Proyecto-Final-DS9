const express = require('express');
const router = express.Router();
var passport = require('passport');
const controllers = require('../controllers/_index');
const perfilCtrl = require('../controllers/perfilController');

const { token } = require('morgan');
const controller = require('../controllers/UserController');


//stripe
const stripe = require('stripe')('sk_test_51H5dA2KDd3ZOeKrKQtrJpYAYSS2X8AgqCBOg8zw85ttAb9Jaq3P2EYfz2K13SuoTlFHJLHVHtBAwJJF5zPSK6mii00xxkfhHuI');



router.get('/test',(req,res) => { res.render('jquey')});
router.get('/help',(req,res) => { res.render('Ayuda')});

router.get('/registro',controllers.UserController.getSignUp);
router.post('/registro',controllers.UserController.postSignUp);
router.get('/signin',controllers.UserController.getSignIn);
router.get('/login',(req,res) => { res.render('Login')});
//router.get('/profile',(req,res) => { res.render('Perfil')});
router.get('/profile',controllers.perfilUpController.getSignUp);
router.post('/profile',controllers.perfilUpController.postSignUp); 

router.get('/passchange',(req,res) => { res.render('RecuperarPass')});
router.get('/cobertura',(req,res) => { res.render('Cobertura')});
router.get('/sugerencias',(req,res) => { res.render('Sugerencias')});
router.get('/supermercados',(req,res) => { res.render('Supermercados')});
router.get('/Todos',(req,res) => { res.render('Todos')});
router.get('/pago',(req,res) => { res.render('Pago')});
router.get('/paquetes',(req,res) => { res.render('Paquetes')});
router.get('/pedido',(req,res) => { res.render('Pedido')});
router.get('/favoritos',(req,res) => { res.render('Fav')});
router.get('/categorias',(req,res) => { res.render('Categorias')});
router.get('/newProduct',(req,res) => { res.render('NewProduct')});
router.get('/oferta',(req,res) => { res.render('Ofertas')});



router.get('/shoppingcart', controllers.carrito_controller.list);
router.get('/', controllers.landingController.list);
router.get('/profile', perfilCtrl.list);


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