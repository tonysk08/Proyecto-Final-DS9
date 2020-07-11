const express = require('express');
const path=require('path');
const morgan = require('morgan');
const navRoutes = require(path.join(__dirname,'src/routes/routes'));

//moddulo extra para dar color a la consola inecesario
const colors = require('colors');

const app = express();

//configuracion del server
app.set('port',process.env.PORT || 3000);
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'src/views'));

//midelwares
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

//Conexion a BD
const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'prueba'
});
connection.connect((err) =>{
    if (err) throw err;
    console.log('Conectado a la BD!');
});