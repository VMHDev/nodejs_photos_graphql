/*
 ** 02 - File định nghĩa các truy vấn GraphQL
 */
const categoryResolvers = {
  Query: {
    // @query GET api/category
    // @desc Get all category
    // @access Public
    categories: async (parent, args, context) => {
      try {
        const categories = await context.categoryMethod.getAllCategories();
        return {
          success: true,
          data: categories,
        };
      } catch (error) {
        console.log(error);
        throw new ApolloError(MSG_INTERNAL_SERVER_ERROR, '500');
      }
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
