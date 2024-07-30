const {
  categoryCreate,
  getCategories,
  updateCategory,
  deleteCategory,
} = require("../controllers/categoryController");
const {
  getServices,
  serviceCreate,
  updateService,
  deleteService,
} = require("../controllers/serviceController");
const {
  slotCreate,
  getSlots,
  updateSlot,
  deleteSlot,
} = require("../controllers/slotController");
const {
  userCreate,
  getUsers,
  userLogin,
} = require("../controllers/userController");

const router = require("express").Router();

//User
router.get("/users", getUsers);
router.post("/user", userCreate);
router.post("/login", userLogin);

//Categories
router.get("/categories", getCategories);
router.post("/CategoryCreate", categoryCreate);
router.patch("/category/:id", updateCategory);
router.delete("/deletecategory/:id", deleteCategory);

//Slot
router.get("/slots", getSlots);
router.post("/slot", slotCreate);
router.patch("/slot/:id", updateSlot);
router.delete("/slot/:id", deleteSlot);

//Service
router.get("/services", getServices);
router.post("/service", serviceCreate);
router.patch("/service/:id", updateService);
router.delete("/service/:id", deleteService);

module.exports = router;
