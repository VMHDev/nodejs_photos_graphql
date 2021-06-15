/*
 ** 01 - File định nghĩa cấu trúc của graph QL dựa trên cấu trúc database
 */
const { gql } = require('apollo-server-express');

const authTypeDefs = gql`
  input LoginInput {
    email: String!
    password: String!
  }

  #############################################################################################
  # ROOT TYPE
  extend type Mutation {
    login(input: LoginInput): Respone
  }
`;

module.exports = authTypeDefs;
