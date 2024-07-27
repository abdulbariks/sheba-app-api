const {
  categoryCreate,
  getCategories,
  updateCategory,
  deleteCategory,
} = require("../controllers/categoryController");
const { userCreate, getUsers } = require("../controllers/userController");

const router = require("express").Router();

//User
router.get("/getUsers", getUsers);
router.post("/UserCreate", userCreate);

//Categories
router.get("/categories", getCategories);
router.post("/CategoryCreate", categoryCreate);
router.patch("/category/:id", updateCategory);
router.delete("/deletecategory/:id", deleteCategory);

module.exports = router;
