const {
  bookingCreate,
  getBookings,
  getSingalBooking,
  updateBooking,
  deleteBooking,
} = require("../controllers/bookingController");
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
  getSingalService,
} = require("../controllers/serviceController");
const {
  slotCreate,
  getSlots,
  updateSlot,
  deleteSlot,
  getSingalSlot,
} = require("../controllers/slotController");
const {
  getSingalStaff,
  getStaffs,
  staffCreate,
  updateStaff,
  deleteStaff,
} = require("../controllers/staffController");
const {
  userCreate,
  getUsers,
  userLogin,
  getSingalUser,
  updateUser,
  deleteUser,
} = require("../controllers/userController");

const router = require("express").Router();

//User
router.get("/users", getUsers);
router.get("/user/:id", getSingalUser);
router.post("/user", userCreate);
router.post("/login", userLogin);
router.patch("/user/:id", updateUser);
router.delete("/user/:id", deleteUser);

//Categories
router.get("/categories", getCategories);
router.post("/category", categoryCreate);
router.patch("/category/:id", updateCategory);
router.delete("/category/:id", deleteCategory);

//Slot
router.get("/slots", getSlots);
router.get("/slot/:id", getSingalSlot);
router.post("/slot", slotCreate);
router.patch("/slot/:id", updateSlot);
router.delete("/slot/:id", deleteSlot);

//Service
router.get("/services", getServices);
router.get("/service/:id", getSingalService);
router.post("/service", serviceCreate);
router.patch("/service/:id", updateService);
router.delete("/service/:id", deleteService);

//Staff route
router.get("/staffs", getStaffs);
router.get("/staff/:id", getSingalStaff);
router.post("/staff", staffCreate);
router.patch("/staff/:id", updateStaff);
router.delete("/staff/:id", deleteStaff);

//Booking route
router.get("/bookings", getBookings);
router.get("/booking/:id", getSingalBooking);
router.post("/booking", bookingCreate);
router.patch("/booking/:id", updateBooking);
router.delete("/booking/:id", deleteBooking);

module.exports = router;
