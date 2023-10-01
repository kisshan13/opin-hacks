import mongoose from "mongoose";
import database from "../../database";
import { Schema, number } from "zod";

const bookingModel = new mongoose.Schema({
  date: {
    type: Date,
    required: true,
  },

  seats: {
    type: Number,
    required: true,
  },

  bus: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Bus",
  },

  selectedSeats: {
    type: [Number],
  },
});

const Booking = database.model("Booking", bookingModel);

export default Booking;
