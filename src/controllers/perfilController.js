var controller = {};


controller.list = (req, res) => {
  req.getConnection((err, conn) => {
    conn.query('SELECT nombre, apellido, cedula, email, password, telefono, fechaNacimiento FROM users where email = "zarmiento227@gmail.com"', (err, users, fields) => {
     if (err) {
      res.json(err);
     }
       conn.query('SELECT provincia, distrito, corregimiento, barriada, calle from ubicacion_usuario where idUbicacion = 1', (err, ubicacion_usuario, fields) => {
        if (err) {
          res.json(err);
         }
                
       res.render('Perfil', {
        data: users,
        ubic: ubicacion_usuario
     });
     });
    });
    });
};

module.exports = controller;