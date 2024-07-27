const User = require("../models/userSchema");

const userCreate = async (req, res) => {
  try {
    const user = new User(req.body);

    let result = await user.save();

    res.send(result);
  } catch (err) {
    res.status(500).json(err);
  }
};

const getUsers = async (req, res) => {
  try {
    let users = await User.find();
    res.send(users);
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = { userCreate, getUsers };
