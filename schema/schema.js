/*
 ** 01 - File định nghĩa cấu trúc của graph QL dựa trên cấu trúc database
 */
const { gql } = require('apollo-server-express');

const typeDefs = gql`
  scalar Date
  type Category {
    id: ID!
    name: String
    registered_date: Date
  }

  type Photo {
    id: ID!
    path: String
    title: String
    desc: String
    is_public: Boolean
    category: Category
    registered_date: Date
  }

  #############################################################################################
  # ROOT TYPE
  type Query {
    categories: [Category]
    category(id: ID!): Category
    photos: [Photo]
    photo(id: ID): Photo
  }
`;

module.exports = typeDefs;
