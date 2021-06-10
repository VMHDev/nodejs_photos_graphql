require('dotenv').config();
var lodash = require('lodash');
const express = require('express');
const cors = require('cors');
const { ApolloServer } = require('apollo-server-express');

// Load config connect database
const connectDB = require('./config/db');

// Load schema & resolvers
const baseTypeDefs = require('./schema/baseTypeDefs');
const categoryTypeDefs = require('./schema/categoryTypeDefs');
const photoTypeDefs = require('./schema/photoTypeDefs');

const categoryResolvers = require('./resolver/categoryResolvers');
const photoResolvers = require('./resolver/photoResolvers');

// Load database methods
const categoryMethod = require('./database/categoryMethod.js');
const photoMethod = require('./database/photoMethod.js');

// Start app
const app = express();
app.use(express.json()); // express accept post body with json
app.use(cors());

// Connect database
connectDB();

// Init apollo server
const server = new ApolloServer({
  typeDefs: [baseTypeDefs, categoryTypeDefs, photoTypeDefs],
  resolvers: lodash.merge({}, categoryResolvers, photoResolvers),
  context: () => ({ categoryMethod, photoMethod }),
});
server.applyMiddleware({ app });

// Run
const PORT = process.env.PORT || 3003;
app.listen(PORT, function () {
  console.log(
    `Server photos api is ready at: http://localhost:${PORT}${server.graphqlPath}`
  );
});
