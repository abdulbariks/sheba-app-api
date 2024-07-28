const mongoose = require("mongoose");

const slotSchema = new mongoose.Schema({
  label: {
    type: String,
    required: true,
  },
  start_time: {
    type: String,
    required: true,
  },
  end_time: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("slot", slotSchema);
