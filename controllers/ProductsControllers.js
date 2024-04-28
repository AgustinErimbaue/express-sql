const db = require("../config/database.js");

const ProductsControllers = {
  create(req, res) {
    let user = {
      name: req.body.name,
      category: req.body.category,
      price: req.body.price
    };
    let sql = "INSERT INTO products SET ?";
    db.query(sql, user, (err, result) => {
      if (err) throw err;
      console.log(result);
      res.send("products added...");
    });
  },
  getAll(req, res) {
    let sql = "SELECT * FROM products";
    db.query(sql, (err, result) => {
      if (err) throw err;
      res.send(result);
    });
  },
  getById(req, res) {
    let id = req.params.id;
    let sql = "SELECT * FROM products WHERE id = ?";
    db.query(sql, id, (err, result) => {
      if (err) throw err;
      res.send(result);
    });
  },
};

module.exports = ProductsControllers;
