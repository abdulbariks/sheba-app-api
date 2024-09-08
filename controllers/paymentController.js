const SSLCommerzPayment = require("sslcommerz-lts");
const store_id = "abdul66ddfd1687a37";
const store_passwd = "abdul66ddfd1687a37@ssl";
const is_live = false; //true for live, false for sandbox
const Booking = require("../models/bookingSchema");

const getPayment = async (req, res) => {
  const amount = Number(req.params.amount);
  const trx_id = req.params.trx_id;
  const data = {
    total_amount: amount,
    currency: "BDT",
    tran_id: "trx_id", // use unique tran_id for each api call
    success_url: `http://localhost:3030/success/${trx_id}`,
    fail_url: `http://localhost:3030/fail/${trx_id}`,
    cancel_url: `http://localhost:3030/cancel/${trx_id}`,
    ipn_url: "http://localhost:3030/ipn",
    shipping_method: "Courier",
    product_name: "Computer.",
    product_category: "Electronic",
    product_profile: "general",
    cus_name: "Customer Name",
    cus_email: "customer@example.com",
    cus_add1: "Dhaka",
    cus_add2: "Dhaka",
    cus_city: "Dhaka",
    cus_state: "Dhaka",
    cus_postcode: "1000",
    cus_country: "Bangladesh",
    cus_phone: "01711111111",
    cus_fax: "01711111111",
    ship_name: "Customer Name",
    ship_add1: "Dhaka",
    ship_add2: "Dhaka",
    ship_city: "Dhaka",
    ship_state: "Dhaka",
    ship_postcode: 1000,
    ship_country: "Bangladesh",
  };
  const sslcz = new SSLCommerzPayment(store_id, store_passwd, is_live);
  sslcz.init(data).then((apiResponse) => {
    // Redirect the user to payment gateway
    let GatewayPageURL = apiResponse.GatewayPageURL;
    GatewayPageURL &&
      res.send({
        status: true,
        payment_link: GatewayPageURL,
      });
  });
};

const successPyment = async (req, res) => {
  const trx_id = req.params.trx_id;

  const paymentDetails = {
    status: "success",
  };

  await Booking.updateOne(
    {
      trx_id,
    },
    {
      $set: paymentDetails,
    },
    (err, result) => {
      err &&
        res.send({
          status: false,
          message: err.message,
        });
      result && res.redirect("http://localhost:3000/dashboard");
    }
  );
};

const failPyment = async (req, res) => {
  const trx_id = req.params.trx_id;

  const paymentDetails = {
    status: "fail",
  };

  await Booking.updateOne(
    {
      trx_id,
    },
    {
      $set: paymentDetails,
    },
    (err, result) => {
      err &&
        res.send({
          status: false,
          message: err.message,
        });
      result && res.redirect("http://localhost:3000/dashboard");
    }
  );
};

const cancelPyment = async (req, res) => {
  const trx_id = req.params.trx_id;

  const paymentDetails = {
    status: "cancel",
  };

  await Booking.updateOne(
    {
      trx_id,
    },
    {
      $set: paymentDetails,
    },
    (err, result) => {
      err &&
        res.send({
          status: false,
          message: err.message,
        });
      result && res.redirect("http://localhost:3000/dashboard");
    }
  );
};

module.exports = { getPayment, cancelPyment, failPyment, successPyment };
