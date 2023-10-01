import { Schema } from "mongoose";
import database from "../../database";
import { string } from "zod";

const routeSchema = new Schema({
  from: {
    type: String,
    required: true,
  },

  to: {
    type: String,
    required: true,
  },

  upTime: {
    type: String,
    required: true,
  },

  downTime: {
    type: String,
    required: true,
  },

  acPrice: {
    type: Number,
    required: true,
  },

  normalPrice: {
    type: Number,
    required: true,
  },

  time: {
    type: String,
    required: true,
  },

  company: {
    type: Schema.Types.ObjectId,
    required: true,
  },

  buses: {
    type: [Schema.Types.ObjectId],
    ref: "Bus",
  },
});

const Routes = database.model("Route", routeSchema);

export default Routes;
