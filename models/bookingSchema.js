const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  date: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  service: {},

  staff: {},

  slot: {},

  trx_id: {},
  status: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("booking", bookingSchema);
