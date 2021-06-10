/*
 ** 01 - File định nghĩa cấu trúc của graph QL dựa trên cấu trúc database
 */
const { gql } = require('apollo-server-express');

const photoTypeDefs = gql`
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
  extend type Query {
    photos: [Photo]
    photo(id: ID): Photo
  }
`;

module.exports = photoTypeDefs;
