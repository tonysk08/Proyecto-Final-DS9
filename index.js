const express = require('express');
const path=require('path');
const morgan = require('morgan');
const navRoutes = require(path.join(__dirname,'src/routes/routes'));
const mysql = require('mysql'),
      myConnection = require('express-myconnection');

//moddulo extra para dar color a la consola inecesario
const colors = require('colors');

const app = express();

//configuracion del server
app.set('port',process.env.PORT || 3000);
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'src/views'));

//midelwares
app.use(myConnection(mysql, {
    host: 'mkorvuw3sl6cu9ms.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
    user: 'z83mjobv4lw0df0v',
    password: 'p634oktas5bvfstt',
    database: 'hkaj4tr8skt741qf'
  }, 'single'));

//fija morgan
app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}));

//usando rutas
app.use('/',navRoutes)

//fijando archivos estaticos publicos
app.use(express.static(path.join(__dirname,'src/public')));

app.listen(app.get('port'),function(){
    console.log('Server running on port '.blue+app.get('port'));
})
