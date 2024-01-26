const express = require("express");
const db = require("./config/connection");
const routes = require("./routes");

const PORT = process.env.PORT || 3001;
const app = express();

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

// Event handler for server errors
app.on('error', (error) => {
  console.error('Express server error:', error);
});

// Connect to the database
db.once("open", () => {
  // Start the server
  app.listen(PORT, () => {
    console.log(`API server running on port: ${PORT}!`);
  });
});
