const { UserInputError, AuthenticationError } = require('apollo-server');
const argon2 = require('argon2');
const { ApolloError } = require('apollo-server-errors');

const { generateTokens } = require('../utils/helper');

const {
  MSG_INTERNAL_SERVER_ERROR,
  MSG_USER_LOGIN_SUCCESS,
  MSG_LOGIN_INFO_MISS,
  MSG_LOGIN_INFO_INCORRECT,
} = require('../constants/message');

const authResolvers = {
  Mutation: {
    login: async (parent, args, context) => {
      const { email, password } = args.input;

      // Simple validation
      if (!email || !password) {
        // VMH NOTE: throw new ApolloError(MSG_LOGIN_INFO_MISS, '400', { success: false }); -> Khi muốn truyền thêm dữ liệu { success: false }
        throw new ApolloError(MSG_LOGIN_INFO_MISS, '400');
      }

      try {
        // Check for existing user
        const user = await context.userMethod.getUserByEmail(email);
        if (!user) {
          throw new ApolloError(MSG_LOGIN_INFO_INCORRECT, '400');
        }

        // Email found
        const passwordValid = await argon2.verify(user.password, password);
        if (!passwordValid) {
          throw new ApolloError(MSG_LOGIN_INFO_INCORRECT, '400');
        }

        // Create JWT
        const tokens = generateTokens({ id: user._id, email: user.email });

        // Update refresh token in database
        let updatedUser = {
          refresh_token: tokens.refreshToken,
        };
        const userUpdateCondition = { _id: user._id };

        updatedUser = await context.userMethod.updateRefreshToken(
          userUpdateCondition,
          updatedUser
        );

        // Remove info unnecessary
        let userPublic = (({
          _id,
          name,
          email,
          refresh_token,
          permission,
        }) => ({
          _id,
          name,
          email,
          refresh_token,
          permission,
        }))(updatedUser);

        return {
          success: true,
          data: {
            message: MSG_USER_LOGIN_SUCCESS,
            accessToken: tokens.accessToken,
            user: userPublic,
          },
        };
      } catch (error) {
        console.log(error);
        if (error) {
          throw error;
        } else {
          throw new ApolloError(MSG_INTERNAL_SERVER_ERROR, '500');
        }
      }
    },
  },
};

module.exports = authResolvers;
