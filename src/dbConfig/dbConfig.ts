import mongoose from "mongoose";
require("dotenv").config();

export async function connect() {
  try {
    const MONGO_URI = process.env.MONGO_URI;
    console.log("MongoDB URI:", MONGO_URI);

    if (!MONGO_URI) {
      throw new Error("MONGO_URI is not defined in the environment variables");
    }

    await mongoose.connect(MONGO_URI);

    const connection = mongoose.connection;

    connection.on("connected", () => {
      console.log("MongoDB connected successfully");
    });

    connection.on("error", (err) => {
      console.log(
        `MongoDB connection error. Please make sure MongoDB is running. ${err}`
      );
      process.exit(1);
    });
  } catch (error) {
    console.log("Something went wrong");
    console.log(error);
    process.exit(1);
  }
}
