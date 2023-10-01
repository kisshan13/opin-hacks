import mongoose from "mongoose";
import { config } from "dotenv";

config();

const DATABASE_URI = process.env.DATABASE_CONNECTION_URL;

if (!DATABASE_URI) {
  throw new Error("NO DATABSE URL PRESENT");
}

const database = mongoose.createConnection(DATABASE_URI);

export default database;
