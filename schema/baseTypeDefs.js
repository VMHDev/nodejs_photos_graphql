/*
 ** 01 - File định nghĩa cấu trúc của graph QL dựa trên cấu trúc database
 */
const { gql } = require('apollo-server-express');

const baseTypeDefs = gql`
  scalar Date
  scalar JSON
  scalar JSONObject

  type ResponeObject {
    success: Boolean
    data: JSONObject
  }

  type ResponeJson {
    success: Boolean
    data: JSON
  }

  #############################################################################################
  # ROOT TYPE
  type Query
  type Mutation
`;

module.exports = baseTypeDefs;
