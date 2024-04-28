
const db = require("../config/database.js");

const OrdersController = {
  create(req, res) {
    let order = {
      user_id: req.body.user_id,
      product_name: req.body.product_name,
      purchase_date: req.body.purchase_date,
    };
    let sql = "INSERT INTO orders SET ?";
    db.query(sql, order, (err, result) => {
      if (err) throw err;
      console.log(result);
      res.send("Pedido agregado correctamente");
    });
  },
  getAll(req, res) {
    let sql = "SELECT * FROM orders";
    db.query(sql, (err, result) => {
      if (err) throw err;
      console.log(result);
      res.send(result);
    });
  },
  getById(req, res) {
    let id = req.params.id;
    let sql = "SELECT * FROM orders WHERE id = ?";
    db.query(sql, id, (err, result) => {
      if (err) throw err;
      res.send(result);
    });
  },
  deleteById(req, res) {
    let id = req.params.id;
    let sql = "DELETE FROM orders WHERE id = ?";
    db.query(sql, id, (err, result) => {
      if (err) throw err;
      res.send(result);
    });
  },
};

module.exports = OrdersController;
