import { Schema } from "mongoose";
import database from "./database";

const appSchema = new Schema({
  appName: {
    type: String,
    unique: true,
    required: true,
  },

  port: {
    type: String,
    unique: true,
  },

  url: {
    type: String,
  },
});

const App = database.model("App", appSchema);

export default App;
