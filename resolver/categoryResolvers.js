/*
 ** 02 - File định nghĩa các truy vấn GraphQL
 */
const { ForbiddenError } = require('apollo-server');
const categoryResolvers = {
  Query: {
    categories: async (parent, args, context) => {
      return await context.categoryMethod.getAllCategories();
    },
    category: async (parent, args, context) => {
      return await context.categoryMethod.getCategoryById(args.id);
    },
  },
  Mutation: {
    createCategory: async (parent, args, context) => {
      return await context.categoryMethod.createCategory(args);
    },
    updateCategory: async (parent, args, context) => {
      const res = await context.categoryMethod.updateCategory(args);
      console.log('res', res);
      return res;
    },
    deleteCategory: async (parent, args, context) => {
      const res = await context.categoryMethod.deleteCategory(args);
      console.log('res', res);
      return res;
    },
  },
};

module.exports = categoryResolvers;
