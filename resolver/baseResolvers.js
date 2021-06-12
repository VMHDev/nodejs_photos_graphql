const { GraphQLJSON, GraphQLJSONObject } = require('graphql-type-json');
const baseResolvers = {
  JSON: GraphQLJSON,
  JSONObject: GraphQLJSONObject,
};

module.exports = baseResolvers;
