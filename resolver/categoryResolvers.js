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
};

module.exports = categoryResolvers;
