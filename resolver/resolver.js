/*
 ** 02 - File định nghĩa các truy vấn GraphQL
 */
const resolvers = {
  Query: {
    categories: async (parent, args, context) => {
      return await context.categoryMethod.getAllCategories();
    },
    category: async (parent, args, context) => {
      return await context.categoryMethod.getCategoryById(args.id);
    },
    photos: async (parent, args, context) => {
      return await context.photoMethod.getAllPhotos();
    },
    photo: async (parent, args, context) => {
      return await context.photoMethod.getPhotoById(args.id);
    },
  },
  Photo: {
    category: async (parent, args, context) => {
      return await context.categoryMethod.getCategoryById(parent.category);
    },
  },
};

module.exports = resolvers;
