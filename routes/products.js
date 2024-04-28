const express = require("express");
const ProductsControllers = require("../controllers/ProductsControllers");
const router = express.Router();

router.post("/", ProductsControllers.create);
router.get("/", ProductsControllers.getAll);


module.exports = router;