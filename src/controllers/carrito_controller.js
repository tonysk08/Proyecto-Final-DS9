const controller = {};

controller.list = (req, res) => {
  req.getConnection((err, conn) => {
    conn.query('SELECT * FROM productos', (err, carrito) => {
     if (err) {
      res.json(err);
     }
     res.render('/', {
        data: carrito
     });
    });
  });
};
module.exports = controller;