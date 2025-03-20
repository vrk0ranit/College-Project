const mongoose = require("mongoose");

const connectDatabase = async () => {
  try {
    const data = await mongoose.connect(process.env.DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`MongoDB connected with server: ${data.connection.host}`);
  } catch (err) {
    console.error("Database connection failed:", err);
    process.exit(1); // Stop the server if DB connection fails
  }
};

module.exports = connectDatabase;
