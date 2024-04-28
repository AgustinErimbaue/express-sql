const db = require("../config/database.js");

const CategoryControllers = {
  create(req, res) {
    let user = { name: req.body.name };
    let sql = "INSERT INTO category SET ?";
    db.query(sql, user, (err, result) => {
      if (err) throw err;
      console.log(result);
      res.send("category added...");
    });
  },
  getAll(req, res) {
    let sql = "SELECT * FROM category";
    db.query(sql, (err, result) => {
      if (err) throw err;
      res.send(result);
    });
  },
  getById(req, res) {
    let id = req.params.id;
    let sql = "SELECT * FROM category WHERE id = ?";
    db.query(sql, id, (err, result) => {
      if (err) throw err;
      res.send(result);
    });
  },
  deleteById(req, res) {
    let id = req.params.id;
    let sql = "DELETE FROM category WHERE id = ?";
    db.query(sql, id, (err, result) => {
      if (err) throw err;
      res.send(result);
    });
  },
};

module.exports = CategoryControllers;
