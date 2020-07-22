var controller = {};


controller.list = (req, res) => {
  req.getConnection((err, conn) => {
    conn.query('SELECT nombre, apellido, cedula, email, celular, telefono,  fechaNacimiento, ubicacion FROM users where email = ana@gmail.com', (err, users, fields) => {
     if (err) {
      res.json(err);
     }
     conn.query('SELECT UsersSecret from users_secret where userMail = ana@gmail.com', (err, users_secret, fields) => {
      if (err) {
        res.json(err);
       }
       conn.query('SELECT provincia, distrito, corregimieno, barriada, calle from ubicacion_usuario where idUbicacion = 4', (err, ubicacion_usuario, fields) => {
        if (err) {
          res.json(err);
         }
         conn.query('SELECT dia, mes, año from fecha_nacimiento where idfecha = 3', (err, fecha_nacimiento, fields) => {
            if (err) {
              res.json(err);
             }
       res.render('Perfil', {
        data: users,
        ubic: ubicacion_usuario,
        pass: users_secret,
        date: fecha_nacimiento
     });
     });
    });
    });
    });
  });
};

module.exports = controller;