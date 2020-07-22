const controller = {};
var bcrypt = require('bcryptjs');
var mysql = require('mysql');

controller.getSignUp = (req, res, next) => {
    res.render("registro")
}

controller.postSignUp = (req, res, next) =>{
    var salt = bcrypt.genSaltSync(10); //encriptacion
    var password = bcrypt.hashSync(req.body.password, salt);

    var user =
    {
        nombre : req.body.nombre,
        apellido : req.body.lastname,
        cedula : req.body.cedula,
        email : req.body.email,
        password : password,
        celular : req.body.celular,
        telefono : req.body.telefono,
        fechaNacimiento : req.body.fecha,
    };

    req.getConnection((err, conn) => {
      console.log(user)
      conn.query('INSERT INTO users SET ?', user, (err, rows, fields) => {
       if (err) {
        res.json(err);
       }
       res.render('login')
      });
    });

} 
controller.getSignIn = (req, res, next) => {
    res.render("login")
}
module.exports = controller;