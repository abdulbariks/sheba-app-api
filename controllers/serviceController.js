const Service = require("../models/serviceSchema");

const serviceCreate = async (req, res) => {
  try {
    const service = new Service(req.body);

    let result = await service.save();
    res.send({
      status: true,
      message: "Service Created successfully",
      result,
    });
  } catch (err) {
    res.status(500).json(err);
  }
};

const getServices = async (req, res) => {
  try {
    let services = await Service.find();
    services.length > 0
      ? res.send({
          status: true,
          message: "Service Fetched successfully",
          services,
        })
      : res.send({
          status: false,
          message: "No Service Found",
          services,
        });
  } catch (err) {
    res.status(500).json(err);
  }
};

const updateService = async (req, res) => {
  try {
    let result = await Service.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );

    res.send({
      status: true,
      message: "Service Updated Successfully",
      result,
    });
  } catch (error) {
    res.status(500).json(error);
  }
};

const deleteService = async (req, res) => {
  try {
    const deletedService = await Service.findByIdAndDelete(req.params.id);
    res.send({
      status: true,
      message: "Service Deleted Successfully",
      deletedService,
    });
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = { serviceCreate, getServices, updateService, deleteService };
