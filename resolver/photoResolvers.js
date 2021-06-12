/*
 ** 02 - File định nghĩa các truy vấn GraphQL
 */
const photoResolvers = {
  Query: {
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

module.exports = photoResolvers;
