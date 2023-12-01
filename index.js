const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const dotenv = require("dotenv");
const cors = require("cors");

// Loading the environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB (replace 'your-mongodb-uri' with your actual MongoDB connection URI)
mongoose.connect(process.env.MONGO_URL);
const db = mongoose.connection;

db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Connected to MongoDB'));

// Middleware
app.use(bodyParser.json());
app.use(cors());
// Routes
const designersRouter = require('./routes/designer'); 
app.use('/', designersRouter);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
