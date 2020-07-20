const controller = {};


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

module.exports = controller;