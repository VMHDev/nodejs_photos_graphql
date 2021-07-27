/*
 ** 01 - File định nghĩa cấu trúc của graph QL dựa trên cấu trúc database
 */
const { gql } = require('apollo-server-express');

const categoryTypeDefs = gql`
  type Category {
    id: ID!
    name: String
    registered_date: Date
  }

  input CategoryInput {
    id: ID!
    name: String
  }

  #############################################################################################
  # ROOT TYPE
  extend type Query {
    categories: ResponseJson
    category(id: ID!): Category
  }
  extend type Mutation {
    createCategory(name: String): Category
    updateCategory(input: CategoryInput): ResponseObject
    deleteCategory(id: ID!): ResponseObject
  }
`;

module.exports = categoryTypeDefs;
