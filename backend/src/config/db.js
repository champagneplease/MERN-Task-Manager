import mongoose from "mongoose";

export async function conectDB() {
  try {
    const DB_URI = process.env.MONGODB_URI;
    mongoose.connect(DB_URI);
    console.log("Successful MongoDB connection");
  } catch (err) {
    console.error("The connection with MongoDB failed.", err);
    process.exit(1);
  }
}
