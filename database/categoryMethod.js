const Category = require('../models/Category');

const categoryMethod = {
  getAllCategories: async () => await Category.find(),
  getCategoryById: async (id) => {
    return await Category.findById(id);
  },
  createCategory: async (args) => {
    const { name } = args;
    const newCategory = new Category({ name });
    return await newCategory.save();
  },
  updateCategory: async (args) => {
    const { id, name } = args;
    let updatedCategory = {
      name,
    };

    const categoryUpdateCondition = { _id: id };

    return await Category.findOneAndUpdate(
      categoryUpdateCondition,
      updatedCategory,
      { new: true }
    );
  },
  deleteCategory: async (args) => {
    const categoryDeleteCondition = { _id: args.id };
    return await Category.findOneAndDelete(categoryDeleteCondition);
  },
};

module.exports = categoryMethod;
