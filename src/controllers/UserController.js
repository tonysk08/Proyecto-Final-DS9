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
        apellido : req.body.apellido,
        cedula : req.body.cedula,
        email : req.body.email,
        password : password,
        telefono : req.body.telefono,
        fecha : req.body.fecha
    };


    controller.list = (req, res) => {
        req.getConnection((err, conn) => {
          conn.query('INSERT INTO users SET ?', user, (err, rows, fields) => {
           if (err) {
            res.json(err);
           }
           res.render('perfil')
          });
        });
      };

} 
module.exports = controller;