import mongoose from "mongoose";
import { config } from "dotenv";

config();

const database = mongoose.createConnection(process.env.DATABASE_URI || "");

export default database;
