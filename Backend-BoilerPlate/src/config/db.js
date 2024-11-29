const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    let uri = "mongodb+srv://psingh:psinghmongo@user.rxyn8.mongodb.net/mydatabase?retryWrites=true&w=majority"
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB Connected");
  } catch (error) {
    console.error("Database Connection Error:", error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
