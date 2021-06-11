/*
 ** 01 - File định nghĩa cấu trúc của graph QL dựa trên cấu trúc database
 */
const { gql } = require('apollo-server-express');
const { GraphQLJSON, GraphQLJSONObject } = require('graphql-type-json');

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
    categories: [Category]
    category(id: ID!): Category
  }
  extend type Mutation {
    createCategory(name: String): Category
    updateCategory(input: CategoryInput): Respone
    deleteCategory(id: ID!): Respone
  }
`;

module.exports = categoryTypeDefs;
