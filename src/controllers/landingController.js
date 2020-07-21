var controller = {};


controller.list = (req, res) => {
  req.getConnection((err, conn) => {
    conn.query('SELECT nombre, horario, logo FROM supermercados', (err, supermercados) => {
     if (err) {
      res.json(err);
     }
     res.render('LandingPage', {
        data: supermercados
     })
    });
  });
};
controller.listRec = (req, res) => {
  req.getConnection((err, conn) => {
    conn.query('SELECT nombre, imagen, precio from productos', (err, productos) => {
     res.render('LandingPage', {
        data: productos
     })
    });
  });
};
module.exports = controller;