/*
 ** 01 - File định nghĩa cấu trúc của graph QL dựa trên cấu trúc database
 */
const { gql } = require('apollo-server-express');

const baseTypeDefs = gql`
  scalar Date
  type Query
`;

module.exports = baseTypeDefs;
