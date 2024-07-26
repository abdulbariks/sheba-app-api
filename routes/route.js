const { userCreate, getUsers } = require("../controllers/userController");

const router = require("express").Router();

//User
router.get("/getUsers", getUsers);
router.post("/UserCreate", userCreate);

module.exports = router;
