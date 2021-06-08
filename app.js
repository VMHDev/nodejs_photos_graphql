require('dotenv').config();
const express = require('express');
const cors = require('cors');

const connectDB = require('./config/db');

// Start app
const app = express();
app.use(express.json()); // express accept post body with json
app.use(cors());

// Connect database
connectDB();

// Run
const PORT = process.env.PORT || 3003;
app.listen(PORT, function () {
  console.log(`Server photos api is running on port: ${PORT}`);
});
