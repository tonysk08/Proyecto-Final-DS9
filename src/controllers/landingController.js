var controller = {};


controller.list = (req, res) => {
  req.getConnection((err, conn) => {
    conn.query('SELECT nombre, horario, logo FROM supermercados', (err, supermercados, fields) => {
     if (err) {
      res.json(err);
     }
     conn.query('SELECT nombre, imagen, precio from productos', (err, productos, fields) => {
      if (err) {
        res.json(err);
       }
       res.render('LandingPage', {
        data: supermercados,
        prod: productos
     });
     })
    });
  });
};

module.exports = controller;