const User = require("../models/userSchema");

const userCreate = async (req, res) => {
  try {
    const user = new User(req.body);
    let result = await user.save();

    res.send({
      status: true,
      message: "User Created Successfully",
      result,
    });
  } catch (err) {
    res.status(500).json(err);
  }

  // const user = req.body;
  // const isUserExist = await User.findOne({ email: req.body.email });
  // console.log(user);
  // console.log(isUserExist);
  // if (isUserExist) {
  //   res.send({
  //     status: false,
  //     message: "User Already Exist with This Email",
  //   });
  // } else {
  //   const user = new User(req.body);
  //   const result = await user.save();
  //   res.send({
  //     status: true,
  //     message: "User Created Successfully",
  //     result,
  //   });
  // }
};

// User Login
const userLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({
      email: email.toLowerCase(),
      password,
    });
    user
      ? res.send({
          status: true,
          message: "User Logged In",
          user,
        })
      : res.send({
          status: false,
          message: "Your Email or Password Dosen't Match",
        });
  } catch (err) {
    res.status(500).json(err);
  }
};

const getUsers = async (req, res) => {
  try {
    let users = await User.find();
    res.send({
      status: true,
      message: "All User Find Successfully",
      users,
    });
  } catch (err) {
    res.status(500).json(err);
  }
};

const getSingalUser = async (req, res) => {
  try {
    let user = await User.findById(req.params.id);
    res.send({
      status: true,
      message: "User Find Successfully",
      user,
    });
  } catch (error) {
    res.status(500).json(error);
  }
};

const updateUser = async (req, res) => {
  try {
    let result = await User.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );

    res.send({
      status: true,
      message: "User Updated Successfully",
      result,
    });
  } catch (error) {
    res.status(500).json(error);
  }
};

const deleteUser = async (req, res) => {
  try {
    const deletedUser = await User.findByIdAndDelete(req.params.id);
    res.send({
      status: true,
      message: "User Deleted Successfully",
      deletedUser,
    });
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = {
  userCreate,
  getUsers,
  userLogin,
  getSingalUser,
  updateUser,
  deleteUser,
};
