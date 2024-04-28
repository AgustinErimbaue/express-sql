const express = require("express");
const app = express();
const PORT = 3001;
app.use(express.json());
app.use("/users", require("./routes/users"));
app.use("/orders", require("./routes/orders"));
app.use("/category", require("./routes/category"));
app.use("/products", require("./routes/products"))
const db = require("./config/database");

app.get("/createdb", (req, res) => {
  let sql = "CREATE DATABASE usersdb";
  db.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send("Database created...");
  });
});

app.get("/createuserstable", (req, res) => {
  let sql =
    "CREATE TABLE users(id INT AUTO_INCREMENT,name VARCHAR(255), gender VARCHAR(255), PRIMARY KEY(id))";
  db.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send("USERS table created...");
  });
});

app.get("/createcategorytable", (req, res) => {
  let sql = `CREATE TABLE category(
                id INT AUTO_INCREMENT,
                name VARCHAR(255),
                PRIMARY KEY(id))`;
  db.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send("category table created...");
  });
});

app.get("/createproductstable", (req, res) => {
  let sql = `CREATE TABLE products(
                  id INT AUTO_INCREMENT,
                  name VARCHAR(255),
                  category VARCHAR(255),
                  price INT,
                  PRIMARY KEY(id))`;
  db.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send("products table created...");
  });
});

app.get("/createorderstable", (req, res) => {
  let sql = `CREATE TABLE orders (
                id INT AUTO_INCREMENT PRIMARY KEY,
                user_id INT,
                product_name VARCHAR(255),
                purchase_date DATE
              )`;
  db.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send("orders table created...");
  });
});

app.listen(PORT, () => console.log("Servidor levantado en puerto " + PORT));
