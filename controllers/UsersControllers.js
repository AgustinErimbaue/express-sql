
const db = require("../config/database.js");


const UsersControllers = {
  create(req, res) {
    let user = { name: req.body.name, gender: req.body.gender };
    let sql = "INSERT INTO users SET ?";
    db.query(sql, user, (err, result) => {
      if (err) throw err;
      console.log(result);
      res.send("usser added...");
    });
  },
  update(req, res) {
    let id = req.params.id;
    let user = { name: req.body.name, gender: req.body.gender };
    let sql = "UPDATE users SET ? WHERE id = ?";
    db.query(sql, [user, id], (err, result) => {
      if (err) throw err;
      console.log(result);
      res.send("user update...");
    });
  },
  getAll(req, res) {
    let sql = "SELECT * FROM users";
    db.query(sql, (err, result) => {
      if (err) throw err;
      res.send(result);
    });
  },
  getById(req, res) {
    let id = req.params.id;
    let sql = "SELECT * FROM users WHERE id = ?";
    db.query(sql, id, (err, result) => {
      if (err) throw err;
      res.send(result);
    });
  },
  deleteById(req, res) {
    let id = req.params.id;
    let sql = "DELETE FROM users WHERE id = ?";
    db.query(sql, id, (err, result) => {
      if (err) throw err;
      res.send(result);
    });
  },
};

module.exports = UsersControllers;
