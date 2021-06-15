const User = require('../models/User');

const userMethod = {
  getAllUsers: async () => await User.find(),
  getUserById: async (id) => {
    return await User.findById(id);
  },
  getUserByEmail: async (email) => {
    return await User.findOne({ email });
  },
  updateRefreshToken: async (userUpdateCondition, updatedUser) => {
    return await User.findOneAndUpdate(userUpdateCondition, updatedUser);
  },
};

module.exports = userMethod;
