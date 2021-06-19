require('dotenv').config();
var lodash = require('lodash');
const express = require('express');
const cors = require('cors');
const { ApolloServer } = require('apollo-server-express');
const { AuthenticationError } = require('apollo-server');

// Load config connect database
const connectDB = require('./config/db');

// Load schema & resolvers
const baseTypeDefs = require('./schema/baseTypeDefs');
const authTypeDefs = require('./schema/authTypeDefs');
const categoryTypeDefs = require('./schema/categoryTypeDefs');
const photoTypeDefs = require('./schema/photoTypeDefs');

const baseResolvers = require('./resolver/baseResolvers');
const authResolvers = require('./resolver/authResolvers');
const categoryResolvers = require('./resolver/categoryResolvers');
const photoResolvers = require('./resolver/photoResolvers');

// Load database methods
const categoryMethod = require('./database/categoryMethod.js');
const photoMethod = require('./database/photoMethod.js');
const userMethod = require('./database/userMethod.js');

// Start app
const app = express();
app.use(express.json()); // express accept post body with json
app.use(cors());

// Connect database
connectDB();

// Init apollo server
const server = new ApolloServer({
  typeDefs: [baseTypeDefs, authTypeDefs, categoryTypeDefs, photoTypeDefs],
  resolvers: lodash.merge(
    {},
    baseResolvers,
    authResolvers,
    categoryResolvers,
    photoResolvers
  ),
  context: ({ req, res }) => {
    return { req, res, userMethod, categoryMethod, photoMethod };
  },
  formatError: (err) => {
    // Custom body respone when error
    const message = err.message;
    return { success: false, message };
  },
  formatResponse: (response, query) => {
    /* VMH NOTE
      // Get data res
      const { context } = query;
      const { req: request } = context; 
      // Get data headers request
      const { headers = {} } = request;
    */

    const { context } = query;
    const { res } = context;
    const { errors } = response;

    // Custom status code when error
    if (errors) {
      const statusCode = errors[0].extensions?.code
        ? parseInt(errors[0].extensions?.code)
        : 500;
      res.status(statusCode);
    }

    return response;
  },
});
server.applyMiddleware({ app });

// Run
const PORT = process.env.PORT || 3013;
app.listen(PORT, function () {
  console.log(
    `Server photos api is ready at: http://localhost:${PORT}${server.graphqlPath}`
  );
});
