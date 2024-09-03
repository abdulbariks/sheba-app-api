const Booking = require("../models/bookingSchema");

const bookingCreate = async (req, res) => {
  // try {
  //   const booking = new Booking(req.body);

  //   let result = await booking.save();
  //   res.send({
  //     status: true,
  //     message: "Appointment Booked Successfully",
  //     result,
  //   });
  // } catch (err) {
  //   res.status(500).json(err);
  // }

  try {
    const bookingDetails = new Booking(req.body);
    console.log(bookingDetails);

    const { date } = new Booking(req.body);
    // console.log(date);

    const query = {
      date,
      "staff._id": `${req.body.staff._id}`,
      "service._id": `${req.body.service._id}`,
      "slot._id": `${req.body.slot._id}`,
    };
    // console.log(query);

    const bookings = await Booking.find(query);
    // console.log(bookings);

    if (bookings.length > 0) {
      res.send({
        status: false,
        message:
          "Staff is Busy in Slot. Please Choose Another Slot or Another Staff",
      });
    } else {
      const result = await bookingDetails.save();
      res.send({
        status: true,
        message: "Appointment Booked Successfully",
        result,
      });
    }

    // bookings.length > 0
    //   ? res.send({
    //       status: false,
    //       message:
    //         "Staff is Busy in Slot. Please Choose Another Slot or Another Staff",
    //     })
    //   : await bookingDetails.save();
    // res.send({
    //   status: true,
    //   message: "Appointment Booked Successfully",
    //   bookingDetails,
    // });

    // Booking.insertOne(bookingDetails, (err, result) => {
    //     err &&
    //       res.send({
    //         status: false,
    //         message: "An Errror Occurred, Please Try Again Later",
    //       });

    //     result &&
    //       res.send({
    //         status: true,
    //         message: "Appointment Booked Successfully",
    //       });
    //   });
  } catch (error) {}
};

//get All Bookings
const getBookings = async (req, res) => {
  try {
    let bookings = await Booking.find();
    bookings.length > 0
      ? res.send({
          status: true,
          message: "Bookings Fetched successfully",
          bookings,
        })
      : res.send({
          status: false,
          message: "No Bookings Found",
          bookings,
        });
  } catch (err) {
    res.status(500).json(err);
  }
};

const getSingalBooking = async (req, res) => {
  try {
    let booking = await Booking.findById(req.params.id);
    res.send({
      status: true,
      message: "Booking Find Successfully",
      booking,
    });
  } catch (error) {
    res.status(500).json(error);
  }
};

const updateBooking = async (req, res) => {
  try {
    let result = await Booking.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );

    res.send({
      status: true,
      message: "Booking Updated Successfully",
      result,
    });
  } catch (error) {
    res.status(500).json(error);
  }
};

const deleteBooking = async (req, res) => {
  try {
    const deletedBooking = await Booking.findByIdAndDelete(req.params.id);
    res.send({
      status: true,
      message: "Booking Deleted Successfully",
      deletedBooking,
    });
  } catch (error) {
    res.status(500).json(error);
  }
};
module.exports = {
  bookingCreate,
  getBookings,
  getSingalBooking,
  updateBooking,
  deleteBooking,
};
