const Photo = require('../models/Photo');

const photoMethod = {
  getAllPhotos: async () => await Photo.find(),
  getPhotoById: async (id) => {
    return await Photo.findById(id);
  },
};

module.exports = photoMethod;
