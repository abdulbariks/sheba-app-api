const Staff = require("../models/staffSchema");

const staffCreate = async (req, res) => {
  try {
    const staff = new Staff(req.body);

    let result = await staff.save();
    res.send({
      status: true,
      message: "Staff Created successfully",
      result,
    });
  } catch (err) {
    res.status(500).json(err);
  }
};

const getStaffs = async (req, res) => {
  try {
    let staffs = await Staff.find();
    staffs.length > 0
      ? res.send({
          status: true,
          message: "Staffs Fetched successfully",
          staffs,
        })
      : res.send({
          status: false,
          message: "No Staffs Found",
          staffs,
        });
  } catch (err) {
    res.status(500).json(err);
  }
};

const getSingalStaff = async (req, res) => {
  try {
    let staff = await Staff.findById(req.params.id);
    res.send({
      status: true,
      message: "Staff Find Successfully",
      staff,
    });
  } catch (error) {
    res.status(500).json(error);
  }
};

const updateStaff = async (req, res) => {
  try {
    let result = await Staff.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );

    res.send({
      status: true,
      message: "Staff Updated Successfully",
      result,
    });
  } catch (error) {
    res.status(500).json(error);
  }
};

const deleteStaff = async (req, res) => {
  try {
    const deletedStaff = await Staff.findByIdAndDelete(req.params.id);
    res.send({
      status: true,
      message: "Staff Deleted Successfully",
      deletedStaff,
    });
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = {
  staffCreate,
  getStaffs,
  getSingalStaff,
  updateStaff,
  deleteStaff,
};
