const express = require('express');
const path=require('path');
const morgan = require('morgan');
const Routes = require(path.join(__dirname,'src/routes/routes'));
const mysql = require('mysql'),
      myConnection = require('express-myconnection');

var cookieParser = require('cookie-parser');
var flash = require('connect-flash');
var session = require('express-session');
var passport = require('passport');

require ('./src/passport/passport')(passport);

//moddulo extra para dar color a la consola inecesario
const colors = require('colors');

const app = express();

//configuracion del server
app.set('port',process.env.PORT || 3000);
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'src/views'));

//midelwares
app.use(myConnection(mysql, {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'virtualmarketdb'
  }, 'single'));

  app.use(cookieParser());
  app.use(session({
    secret: 'secret', //la clave secreta es la forma en la que nuestra aplicacion va a poder recuperar nuestras sesiones una vez se requiera esas variables de sesion
    resave: false,
    saveUninitialized: false
    }));
  app.use(flash());

  app.use(passport.initialized());
  app.use(passport.session());

//fija morgan
app.use(morgan('dev'));
app.use(express.urlencoded({extended:true}));
app.use(express.json());

//usando rutas
app.use('/',Routes)

//fijando archivos estaticos publicos
app.use(express.static(path.join(__dirname,'src/public')));

app.listen(app.get('port'),function(){
    console.log('Server running on port '.blue+app.get('port'));
})
