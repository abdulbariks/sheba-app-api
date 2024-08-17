const Category = require("../models/categorySchema");

const categoryCreate = async (req, res) => {
  try {
    const category = new Category(req.body);

    let result = await category.save();

    res.send({
      status: true,
      message: "Category Created Successfully",
      result,
    });
  } catch (err) {
    res.status(500).json(err);
  }
};

const getCategories = async (req, res) => {
  try {
    let categories = await Category.find();
    res.send({
      status: true,
      message: "All Categories ",
      categories,
    });
  } catch (err) {
    res.status(500).json(err);
  }
};

const updateCategory = async (req, res) => {
  try {
    let result = await Category.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );

    res.send(result);
  } catch (error) {
    res.status(500).json(error);
  }
};

const deleteCategory = async (req, res) => {
  try {
    const deletedCategory = await Category.findByIdAndDelete(req.params.id);
    res.send({
      status: true,
      message: "Category Deleted Successfully",
      deletedCategory,
    });
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = {
  categoryCreate,
  getCategories,
  updateCategory,
  deleteCategory,
};
