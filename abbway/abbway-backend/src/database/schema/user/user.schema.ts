import { Schema } from "mongoose";
import database from "../../database";

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
    },

    password: {
      type: String,
      required: true,
    },

    verificationCode: {
      type: Number,
    },

    verificationExpiration: {
      type: Number,
    },

    lastLogin: {
      type: Date,
    },

    tickets: {
      type: Schema.Types.ObjectId,
      ref: "Ticktes",
    },

    wallet: {
      type: Schema.Types.ObjectId,
      ref: "Wallet",
    },
  },
  { timestamps: true }
);

const User = database.model("User", userSchema);

export default User;
