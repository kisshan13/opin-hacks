import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("You're watching something");
});

app.listen(4655, () => {
  console.log("Running");
});
