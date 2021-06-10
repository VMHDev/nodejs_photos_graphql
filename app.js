require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { ApolloServer } = require('apollo-server-express');

// Load config connect database
const connectDB = require('./config/db');
// Load schema & resolvers
const typeDefs = require('./schema/schema');
const resolvers = require('./resolver/resolver');

// Start app
const app = express();
app.use(express.json()); // express accept post body with json
app.use(cors());

// Connect database
connectDB();

// Init apollo server
const server = new ApolloServer({
  typeDefs,
  resolvers,
});
server.applyMiddleware({ app });

// Run
const PORT = process.env.PORT || 3003;
app.listen(PORT, function () {
  console.log(
    `Server photos api is ready at: http://localhost:${PORT}${server.graphqlPath}`
  );
});
