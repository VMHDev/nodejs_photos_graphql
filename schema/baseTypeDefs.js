/*
 ** 01 - File định nghĩa cấu trúc của graph QL dựa trên cấu trúc database
 */
const { gql } = require('apollo-server-express');

const baseTypeDefs = gql`
  scalar Date
  scalar JSON
  scalar JSONObject

  type ResponseObject {
    success: Boolean
    data: JSONObject
  }

  type ResponseJson {
    success: Boolean
    data: JSON
  }

  #############################################################################################
  # ROOT TYPE
  type Query
  type Mutation
`;

module.exports = baseTypeDefs;
