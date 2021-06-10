/*
 ** 01 - File định nghĩa cấu trúc của graph QL dựa trên cấu trúc database
 */
const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Category {
    id: ID!
    name: String
  }

  type Photo {
    id: ID!
    path: String
    title: String
    desc: String
    is_public: Boolean
    category: Category
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
