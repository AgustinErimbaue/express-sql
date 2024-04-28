
const express = require("express");
const router = express.Router();
const UsersControllers = require("../controllers/UsersControllers");


router.post("/", UsersControllers.create);
router.put("/:id", UsersControllers.update);
router.get("/", UsersControllers.getAll);
router.get("/:id", UsersControllers.getById);
router.delete("/:id", UsersControllers.deleteById);

module.exports = router;
