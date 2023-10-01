import { Schema } from "mongoose";
import database from "../../database";

const companySchema = new Schema(
  {
    companyName: {
      type: String,
      required: true,
    },

    name: {
      type: String,
      required: true,
    },

    address: {
      type: String,
    },

    password: {
      type: String,
      required: true,
    },

    city: {
      type: String,
    },

    email: {
      type: String,
      required: true,
      unique: true,
    },

    verificationCode: {
      type: Number,
    },

    verificationExpiration: {
      type: Number,
    },

    buses: {
      type: [Schema.Types.ObjectId],
      ref: "Bus",
    },

    routes: {
      type: Schema.Types.ObjectId,
      ref: "Route",
    },
  },
  { timestamps: true }
);

const Company = database.model("Company", companySchema);

export default Company;
