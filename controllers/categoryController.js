const Category = require("../models/categorySchema");

const categoryCreate = async (req, res) => {
  try {
    const category = new Category(req.body);

    let result = await category.save();
    console.log(result);

    res.send(result);
  } catch (err) {
    res.status(500).json(err);
  }
};

const getCategories = async (req, res) => {
  try {
    let categories = await Category.find();
    res.send(categories);
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
    console.log(deletedCategory);
    res.send(deletedCategory);
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
