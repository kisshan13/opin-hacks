import express from "express";
import { config } from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";

import errorHandler from "./middleware/error.middleware";

import userRouter from "./routes/users.route";
import companyRouter from "./routes/company.route";
import busRouter from "./routes/bus.route";
import tokenParser from "./middleware/token.middleware";
import routeRouter from "./routes/routes.route";

config();

const APP_PORT = process.env.PORT;

if (!APP_PORT) {
  throw new Error("NO PORT GIVEN");
}

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

app.use(tokenParser);

app.use("/api/user", userRouter);
app.use("/api/company", companyRouter);
app.use("/api/bus", busRouter);
app.use("/api/route", routeRouter);

app.use(errorHandler);

app.listen(APP_PORT, () => {
  console.log("RUNNING");
});
