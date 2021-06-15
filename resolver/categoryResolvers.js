/*
 ** 02 - File định nghĩa các truy vấn GraphQL
 */
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
      const res = await context.categoryMethod.updateCategory(args.input);
      return {
        success: true,
        data: res,
      };
    },
    deleteCategory: async (parent, args, context) => {
      const res = await context.categoryMethod.deleteCategory(args);
      return {
        success: true,
        data: res,
      };
    },
  },
};

module.exports = categoryResolvers;
