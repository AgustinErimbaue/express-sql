const express = require("express");
const router = express.Router();
const OrdersController = require("../controllers/OrdersControllers");

router.post("/", OrdersController.create);
router.get("/", OrdersController.getAll);
router.get("/:id", OrdersController.getById);
router.delete("/:id", OrdersController.deleteById);

module.exports = router;