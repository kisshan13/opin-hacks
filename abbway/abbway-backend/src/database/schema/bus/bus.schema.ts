import { Schema } from "mongoose";
import database from "../../database";

const busSchema = new Schema({
  name: {
    type: String,
    require: true,
  },

  number: {
    type: String,
    required: true,
    unique: true,
  },

  company: {
    type: Schema.Types.ObjectId,
    ref: "Company",
    required: true,
  },

  route: {
    type: Schema.Types.ObjectId,
    ref: "Route",
  },

  seats: {
    type: Schema.Types.ObjectId,
    ref: "Seat",
  },

  bookings: {
    type: Schema.Types.ObjectId,
    ref: "Booking",
  },

  type: {
    type: String,
    enum: ["AC", "NON-AC", "BOTH"],
    default: "BOTH",
  },
});

const Bus = database.model("Bus", busSchema);

export default Bus;
