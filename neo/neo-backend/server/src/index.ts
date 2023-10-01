import express from "express";
import bodyParser from "body-parser";
import appRouter from "./routes/app.router";
import errorHandler from "./middleware/error.middleware";
import path from "path";
import multer from "multer";
import unzipper from "unzipper";
import buildRouter from "./routes/builds.router";

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
app.use("/uploads", express.static(path.join(__dirname, "public")));

app.use("/api/app", appRouter);
app.use("/api/builds", buildRouter);

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.use(errorHandler);

app.listen(3000, () => {
  console.log("running");
});
