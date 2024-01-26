const { connect, connection } = require('mongoose');

const connectionString = 'mongodb://127.0.0.1:27017/socialDB';

// Connect to the database
connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Event handler for connection errors
connection.on('error', (error) => {
  console.error('MongoDB connection error:', error);
});

// Export the database connection
module.exports = connection;
