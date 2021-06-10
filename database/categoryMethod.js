const Category = require('../models/Category');

const categoryMethod = {
  getAllCategories: async () => await Category.find(),
  getCategoryById: async (id) => {
    return await Category.findById(id);
  },
};

module.exports = categoryMethod;
