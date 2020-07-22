const controller = {};
var bcrypt = require('bcryptjs');
var mysql = require('mysql');

controller.getSignUp = (req, res, next) => {
    res.render("perfil")
}

controller.postSignUp = (req, res, next) =>{
    var salt = bcrypt.genSaltSync(10); //encriptacion
    var password = bcrypt.hashSync(req.body.password, salt);

    var user =
    {
        nombre : req.body.nombre,
        apellido : req.body.apellido,
        cedula : req.body.cedula,
        telefono : req.body.telefono,
        email : req.body.email,
        fechaNacimiento : req.body.fecha,
        password : password,
        
    };

    req.getConnection((err, conn) => {
      console.log(user)
      conn.query('UPDATE users SET ?', user, (err, rows, fields) => {
       if (err) {
        res.json(err);
       }
       res.render('perfil')
      });
    });

} 
module.exports = controller;