const express = require("express");
const router = express.Router();
const CategoryControllers = require("../controllers/CategoryControllers");

router.post("/", CategoryControllers.create);
router.get("/", CategoryControllers.getAll);
router.delete("/:id", CategoryControllers.deleteById);

module.exports = router;