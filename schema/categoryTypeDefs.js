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

  #############################################################################################
  # ROOT TYPE
  extend type Query {
    categories: [Category]
    category(id: ID!): Category
  }
`;

module.exports = categoryTypeDefs;
