const Slot = require("../models/slotSchema");

const slotCreate = async (req, res) => {
  try {
    const slot = new Slot(req.body);

    let result = await slot.save();
    res.send({
      status: true,
      message: "Slot Created successfully",
      result,
    });
  } catch (err) {
    res.status(500).json(err);
  }
};

const getSlots = async (req, res) => {
  try {
    let slots = await Slot.find();
    slots.length > 0
      ? res.send({
          status: true,
          message: "Slot Fetched successfully",
          slots,
        })
      : res.send({
          status: false,
          message: "No Slot Found",
          slots,
        });
  } catch (err) {
    res.status(500).json(err);
  }
};

const updateSlot = async (req, res) => {
  try {
    let result = await Slot.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );

    res.send({
      status: true,
      message: "Slot Updated Successfully",
      result,
    });
  } catch (error) {
    res.status(500).json(error);
  }
};

const deleteSlot = async (req, res) => {
  try {
    const deletedslot = await Slot.findByIdAndDelete(req.params.id);
    res.send({
      status: true,
      message: "Slot Deleted Successfully",
      deletedslot,
    });
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = { slotCreate, getSlots, updateSlot, deleteSlot };
